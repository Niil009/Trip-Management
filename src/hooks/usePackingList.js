import { useSelector, useDispatch } from 'react-redux';
import { addPackingItem, editPackingItem, deletePackingItem, togglePackedStatus } from '../redux/slices/packingListSlice';

const usePackingList = (tripId) => {
  const dispatch = useDispatch();
  const packingList = useSelector(state => state.packingList[tripId] || []);

  const addNewPackingItem = (item) => {
    dispatch(addPackingItem({ tripId, item }));
  };

  const editPackingListItem = (item) => {
    dispatch(editPackingItem({ tripId, item }));
  };

  const removePackingItem = (itemId) => {
    dispatch(deletePackingItem({ tripId, itemId }));
  };

  const toggleItemPackedStatus = (itemId) => {
    dispatch(togglePackedStatus({ tripId, itemId }));
  };

  return {
    packingList,
    addNewPackingItem,
    editPackingListItem,
    removePackingItem,
    toggleItemPackedStatus,
  };
};

export default usePackingList;