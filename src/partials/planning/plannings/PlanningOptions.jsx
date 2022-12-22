import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import icons from '../../../images/icon/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGroupList,
  selectGroup,
} from '../../../store/slice/capabilitiesSlice';
import { revertAll, setGroups } from '../../../store/slice/planningSlice';

const PlanningOptions = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroup);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGroupList());
    dispatch(revertAll());
  }, []);

  useEffect(() => {
    setLetters(groups);
  }, [groups]);

  const [letters, setLetters] = useState([]);
  const [error, setError] = useState(false);
  const [all, setAll] = useState(false);

  useEffect(() => {
    setLetters(groups);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 5000);
    }
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = letters.filter((letter) => letter?.isChecked === true);
    if (data.length > 0) {
      if (all) {
        dispatch(setGroups('all'));
      } else {
        let groupsSelected = [];

        data.forEach((letter) => {
          groupsSelected.push(letter.group);
        });

        dispatch(setGroups(groupsSelected));
      }
      navigate('/mp-pro/planning/orders');
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempLetter = letters.map((letter) => {
        return { ...letter, isChecked: checked };
      });
      setLetters(tempLetter);
      setAll(true);
    } else {
      let tempLetter = letters.map((letter) =>
        letter.group === name ? { ...letter, isChecked: checked } : letter
      );
      setLetters(tempLetter);
      setAll(false);
    }
  };

  return (
    <section>
      <div>
        <h2 className='text-3xl font-semibold text-slate-900 pb-3'>
          Selecciona los grupos a planear
        </h2>
      </div>
      <form>
        <div className='h-[410px] 2xl:h-[460px] overflow-y-auto mb-8'>
          <div className='mt-5 mb-7'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                className='form-checkbox'
                name='allSelect'
                checked={
                  letters.filter((letter) => letter?.isChecked !== true)
                    .length < 1
                }
                onChange={handleChange}
              />
              <span className='text-base font-medium ml-2 text-black'>
                Seleccionar todos
              </span>
            </label>
          </div>
          <div>
            {letters.map((letter, index) => (
              <div key={index} className='mb-7'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    name={letter?.group}
                    checked={letter?.isChecked || false}
                    onChange={handleChange}
                  />
                  <span className='text-base font-medium ml-2 text-black'>
                    {letter.group}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            onClick={onSubmit}
            className='w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary '
          >
            <span className='my-auto'>Continuar</span>

            <img
              src={icons.arrowRight}
              alt='icon-arrow-right'
              className='my-auto ml-3 text-white'
            />
          </button>
        </div>
        {error && (
          <div className='flex justify-center mt-1'>
            <span className='font-semibold text-red-600'>
              Debe elegir al menos un grupo antes de continuar
            </span>
          </div>
        )}
      </form>
    </section>
  );
};

export default PlanningOptions;
