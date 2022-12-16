import React, { useEffect, useState } from "react";
import CapabilitiesTableItem from "./CapabilitiesTableItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCapabilitiesList,
  getCapabilitiesList,
  setCapabilitiesList,
  setCapabilitiesSearch,
  revertSearch,
  selectCapabilitiesSearch,
} from "../../store/slice/capabilitiesSlice";
import icons from "../../images/icon/icons";
import { orderGAsc, orderGDesc, orderPLAsc, orderPLDesc } from "./orderFunc";

const CapabilitiesTable = ({ setTransactionPanelOpen, setGroupPanelOpen }) => {
  const dispatch = useDispatch();
  const [capabilities, setCapabilities] = useState(
    useSelector(selectCapabilitiesList)
  );
  const [orderPL, setOrderPL] = useState({ state: false, asc: false });
  const [orderG, setOrderG] = useState({ state: false, asc: false });
  const [startSearch, setStartSearch] = useState(false)

  const capabilitiesList = useSelector(selectCapabilitiesList);
  const searchItems = useSelector(selectCapabilitiesSearch);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true)
      let result = capabilities.filter((element) => {
        if (
          element.product_line.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.product_line.group.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setCapabilitiesSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false)
    }
  };

  useEffect(() => {
    dispatch(getCapabilitiesList());
  }, []);

  useEffect(() => {
    setCapabilities(capabilitiesList);
  }, [capabilitiesList]);

  useEffect(() => {
    if (orderPL.state) {
      if (!orderPL.asc) {
        orderPLAsc(capabilitiesList, setCapabilities);
      } else {
        orderPLDesc(capabilitiesList, setCapabilities);
      }
    }
  }, [orderPL]);

  useEffect(() => {
    if (orderG.state) {
      if (!orderG.asc) {
        orderGAsc(capabilitiesList, setCapabilities);
      } else {
        orderGDesc(capabilitiesList, setCapabilities);
      }
    }
  }, [orderG]);

  return (
    <div className="bg-white">
      <div className="mt-6">
        <section className="flex justify-end mb-5">
          <input
            className="form-input w-72"
            placeholder="Buscar..."
            type="search"
            onChange={handleSearch}
          />
        </section>
        {capabilities?.length > 0  ? (
          <>
            <div className="overflow-x-auto rounded-xl border border-slate-300 h-[550px]">
              <table className="table-auto w-full table">
                {/* Table header */}
                <thead className="text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th
                      className="px-2 first:pl-5 w-1/4 cursor-pointer"
                      onClick={() => {
                        setOrderPL({ state: true, asc: !orderPL.asc });
                      }}
                    >
                      <div className="flex items-center space-x-10">
                        <div className="font-semibold text-left">
                          Línea de productos
                        </div>
                        <img
                          src={orderPL.asc ? icons.doubleDown : icons.doubleUp}
                          alt="Flecha abajo"
                          className="w-5"
                        />
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                      <p className="font-semibold text-left">Tipo</p>
                    </th>
                    <th
                      className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer "
                      onClick={() => {
                        setOrderG({ state: true, asc: !orderG.asc });
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <p className="font-semibold text-left">Grupo</p>
                        <img
                          src={orderG.asc ? icons.doubleDown : icons.doubleUp}
                          alt="Flecha abajo"
                          className="w-5"
                        />
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <p className="font-semibold text-center">Pz/Hora</p>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                      <p className="font-semibold text-center">Turno/Dia</p>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                      <p className="font-semibold text-center">Pz/Dia</p>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5">
                      <p className="font-semibold text-center">Comentario</p>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {startSearch ? (
                    <CapabilitiesTableItem
                      setTransactionPanelOpen={setTransactionPanelOpen}
                      setGroupPanelOpen={setGroupPanelOpen}
                      capabilitiesList={searchItems}
                    />
                  ) : (
                    <CapabilitiesTableItem
                      setTransactionPanelOpen={setTransactionPanelOpen}
                      setGroupPanelOpen={setGroupPanelOpen}
                      capabilitiesList={capabilities}
                    />
                  )}

                
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <section className="justify-center items-center flex h-96">
              <h2 className="font-semibold text-2xl">Sin datos que mostrar</h2>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default CapabilitiesTable;
