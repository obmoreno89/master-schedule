import PlanningsTableItems from "./PlanningsTableItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getListHistory,
  revertSearch,
  selectHistorySearch,
  selectListHistory,
  selectLoadHistory,
  setSearch,
} from "../../../store/slice/planningSlice";
import Loading from "../../../pages/component/Loading";

function PlanningsTable({ setGroupOptionsPanel }) {
  const dispatch = useDispatch();
  const listHistory = useSelector(selectListHistory);
  const load = useSelector(selectLoadHistory);
  const searchItems = useSelector(selectHistorySearch);

  const [list, setList] = useState(useSelector(selectListHistory));
  const [startSearch, setStartSearch] = useState(false);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    dispatch(getListHistory());
  }, []);

  useEffect(() => {
    setList(listHistory);
  }, [listHistory]);

  useEffect(() => {
    setLoadData(load);
  }, [load]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = list.filter((element) => {
        if (
          element.planning_id
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  return (
    <>
      <section className="mb-5 flex justify-between">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
            Planeaciones
          </h1>
        </div>
        <div className="flex space-x-3">
          <input
            className="form-input w-72"
            placeholder="Buscar por ID..."
            type="search"
            onChange={handleSearch}
          />
          <button
            onClick={() => setGroupOptionsPanel(true)}
            type="button"
            className="btn bg-primary text-white w-54 space-x-2"
          >
            <svg
              className="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span>Crear planeación </span>
          </button>
        </div>
      </section>
      {loadData ? (
        list?.length > 0 ? (
          <section>
            <div className="overflow-x-auto rounded-xl border border-slate-300 h-[550px]">
              {!startSearch ? (
                <PlanningsTableItems
                  data={list}
                  listHistory={listHistory}
                  setList={setList}
                />
              ) : startSearch && searchItems.length > 0 ? (
                <PlanningsTableItems
                  data={searchItems}
                  listHistory={listHistory}
                  setList={setList}
                />
              ) : (
                <section className="justify-center items-center flex h-96">
                  <h2 className="font-semibold text-2xl">
                    Sin datos que mostrar
                  </h2>
                </section>
              )}
            </div>
          </section>
        ) : (
          <Loading />
        )
      ) : (
        <section className="justify-center items-center flex h-96">
          <h2 className="font-semibold text-2xl">Sin datos que mostrar</h2>
        </section>
      )}
    </>
  );
}

export default PlanningsTable;
