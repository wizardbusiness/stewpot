import { arrayMove} from "@dnd-kit/sortable";
import { favoritesInterface } from "../consts/dummyData";
import { Dispatch, SetStateAction } from "react";


export const handleDragEnd = (e, setItems: Dispatch<SetStateAction<favoritesInterface[]>>, items: favoritesInterface[]) => {
  const { active, over } = e;
  if (active.id !== over.id) {
    setItems((prevItems: favoritesInterface[]) => {
      const oldIndex = prevItems.findIndex((item) => item.id === active.id);
      const newIndex = prevItems.findIndex(item => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }
}
