import React, { useState, useEffect } from "react";
import CapabilitiesProductListPanelTableItem from "./CapabilitiesProductListPanelTableItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPLines,
  getProductLines,

  setCapabilitiesSearch,
  revertSearch,
  selectCapabilitiesSearch,
} from "../../store/slice/capabilitiesSlice.js";


const CapabilitiesProductListPanelTable = ({ setOpenModalPL }) => {
  const [pl, setPl] = useState(useSelector(selectPLines));
  const [startSearch, setStartSearch] = useState(false);
  const dispatch = useDispatch();
  const productLines = useSelector(selectPLines);

  const searchItems = useSelector(selectCapabilitiesSearch);


  useEffect(() => {
    dispatch(getProductLines());
  }, [reload]);
  //productLines

  useEffect(() => {
    setPl(productLines);
  }, [productLines]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = pl.filter((element) => {
        if (
          element.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.group.name
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
      setStartSearch(false);
    }
  };

  return (

    <div className="bg-white">
      <div className="mt-6 px-3">
        <div className="mb-3">
          <input
            className="form-input w-full"
            placeholder="Buscar..."
            type="search"
            onChange={handleSearch}
          />
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-300 h-[500px]">
          {!startSearch ? (
            <CapabilitiesProductListPanelTableItem
              setOpenModalPL={setOpenModalPL}
              currentPost={pl}
              productLines={productLines}
              setPl={setPl}
            />
          ) : startSearch && searchItems.length > 0 ? (
            <CapabilitiesProductListPanelTableItem
              setOpenModalPL={setOpenModalPL}
              currentPost={searchItems}
              productLines={productLines}
              setPl={setPl}
            />
          ) : (
            <section className="justify-center items-center flex h-96">
              <h2 className="font-semibold text-2xl">Sin datos que mostrar</h2>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default CapabilitiesProductListPanelTable;
