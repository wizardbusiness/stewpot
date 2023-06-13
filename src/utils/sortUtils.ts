import { arrayMove} from "@dnd-kit/sortable";
import { favoritesInterface } from "../consts/dummyData";

export const handleDragEnd = (e, setItems, items) => {
  const { active, over } = e;
  if (active.id !== over.id) {
    setItems((prevItems: favoritesInterface[]) => {
      const oldIndex = prevItems.findIndex((item) => item.id === active.id);
      const newIndex = prevItems.findIndex(item => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    })
  }
}
