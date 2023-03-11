import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { LabelFilterStyle, InputFilterStyled } from './Filter.styled';

const searchId = nanoid();
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <LabelFilterStyle htmlFor={searchId}>
        Find contacts by name
        <InputFilterStyled
          type="text"
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
          id={searchId}
        />
      </LabelFilterStyle>
    </>
  );
};

export default Filter;
