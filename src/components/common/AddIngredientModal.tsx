import {useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, 
  Button, 
  Stack, 
  Modal, 
  FormGroup, 
  FormControlLabel, 
  Switch, 
} from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';
import IngredientSearchbar from '../IngredientSearchbar';
import IngredientsAccordion from './IngredientsAccordion';
import { commonIngredientRows, pantryColumns } from '../../consts/dummyData';
import { addIngredientModalProps, ingredientInterface, recipeInterface } from '../../consts/interfaces/componentInterfaces';
import { RootState } from '../../consts/interfaces/reduxInterfaces';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 700,
  backgroundColor:'#fff',
  border: '2px, solid, #acacac',
  boxShadow: 20,
  padding: '3em',
}



const AddIngredientModal = ({rows, btnText, searchText, setRecipes}: addIngredientModalProps) => {
  const commonIngredients = useSelector((state: RootState) => state.pantry.commonIngredients);
  const [ open, setOpen] = useState(false);
  const [ selectedRows, setselectedRows ] = useState<GridRowsProp>([]);
  const [ commonIngredientsSelected, setCommonIngredientsSelected ] = useState<boolean>(true);
  const [ allIngredientsSelected, setAllIngredientsSelected ] = useState<boolean>(false);
  const [ checked, setChecked ] = useState<string[]>(commonIngredients)

  const getRecipes = async () => {
  let ingredientString = '';
  // convert ingredients array in req body into web api fetch syntax.
  checked.forEach((ingredient, index) => {
    const lcaseIngredient = ingredient.toLowerCase();
    index !== checked.length - 1
      ? (ingredientString += `${lcaseIngredient},+`)
      : (ingredientString += `${lcaseIngredient}`);
  });
  console.log(ingredientString)
  // https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&number=${numRecipes}&ranking=${ranking}&ignorePantry=${ignorePantry}&apiKey=1cf74764dbd24013935cf83c45275579
  // https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=13f9369a3bec409ebe5f9e90ba459277
  // number=1 in api call: minimize missing ingredients.
  fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&number=3&ranking=2&ignorePantry=false&apiKey=1cf74764dbd24013935cf83c45275579`
  )
    .then((response) => response.json())
    .then((response) => {
      // recipe basic info
      const recipes = response;
      // array of all filtered recipes to be sent to frontend
      // array of all recipe requests that need to be made
      const recipeRequests: Promise<recipeInterface>[] = [];
      
      // iterate through recipes
      recipes.forEach((recipe: recipeInterface) => {
        const id: number = recipe.id
        const missedIngredients: ingredientInterface[] | undefined = recipe.missedIngredients
        const usedIngredients: ingredientInterface[] | undefined = recipe.usedIngredients
        recipeRequests.push(
          // pass in recipe id, missingIngredients and allIngredients since those aren't on this next recipe fetch response. 
          fetchRecipes(id, missedIngredients, usedIngredients)
        );
      });
      // resolve all promises and return result.
      return Promise.all(recipeRequests)
      .then((recipes) => {
        console.log(recipes)
      // after all promises from recipe fetches have fulfilled, send the result back to the client on res.locals
      // duplicate objects because promise.all returns each response object from each resolved promise into a new array, 
      // and you were also pushing it into the original recipe array, resulting in the original response object being 
      // included in the array being used to set the recipe state. Now the resolved promise values are simply used to set the recipe
      // state directly. 
      setRecipes(recipes);
      return
      })
      .catch((err) => {
        console.log('recipe', err);
      });
      
      // =============================================================================================================
      // helper function to pull recipes by id recieved on initial fetch, filter them, and add them to recipes
      // note: unreachable if arrow function.
      // =============================================================================================================
      function fetchRecipes(
        recipeId: number,
        missedIngredients: ingredientInterface[] | undefined,
        usedIngredients: ingredientInterface[] | undefined,
      ) {
        // fetch individual recipe by id (pulled from initial fetch)
        return fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=1cf74764dbd24013935cf83c45275579`
        )
          .then((response) => response.json())
          .then((response) => {
            // destructure additional needed properties from incoming response.
            const {
              id,
              image,
              title,
              servings,
              readyInMinutes,
              license,
              sourceName,
              sourceUrl,
              pricePersServing,
              cheap,
              dairyFree,
              glutenFree,
              ketogenic,
              vegan,
              vegetarian,
              veryHealthy,
              veryPopular,
              whole30,
              weightWatcherSmarPoints,
              dishTypes,
              sustainable,
              instructions,
              diets,
              creditsText,
              extendedIngredients,
             } = response;
             
             const recipeInfo: recipeInterface = {
              id,
              image,
              title,
              servings,
              readyInMinutes,
              license,
              sourceName,
              sourceUrl,
              pricePersServing,
              cheap,
              dairyFree,
              glutenFree,
              ketogenic,
              vegan,
              vegetarian,
              veryHealthy,
              veryPopular,
              whole30,
              weightWatcherSmarPoints,
              dishTypes,
              sustainable,
              instructions,
              diets,
              creditsText,
              missedIngredients,
              usedIngredients,
              extendedIngredients
             }

            // push the full list of recipe properties to filtered recipes.
            // return out the filtered recipes.
            return recipeInfo;
          })
          .catch((err) => {
            console.log(err);
            // not returning anything in catch causes a typescript error in type of promise array (type is void or 'myInterface').
            return err;
          });
      
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

  const handleToggleChecked = (ing: string) => {
    const currentIndex: number = checked.indexOf(ing);
    const updatedChecked = [...checked];
    if (currentIndex === -1) {
      updatedChecked.push(ing);
    } else {
      updatedChecked.splice(currentIndex, 1);
    }
    setChecked(updatedChecked);
  }

  const toggleAddRemoveRow = (ingredient: string) => {
    const currentIndex = checked.indexOf(ingredient);
    const selected = [...selectedRows];
    if (currentIndex === -1) {
      rows.forEach(row => {
        if (ingredient === row.name) selected.push(row);
      });
    } else {
      selected.splice(currentIndex, 1);
    }
    setselectedRows(selected);
  }

  const toggleIncludeAllPantryIngredients = () => {
    if (!allIngredientsSelected) {
      const ingredients = rows.map(row => row.name)
      setChecked(ingredients);
      setAllIngredientsSelected(true);
    } else if (allIngredientsSelected && !commonIngredientsSelected) {
      setChecked([]);
      setAllIngredientsSelected(false);
    } else if (allIngredientsSelected && commonIngredientsSelected) {
      const updatedChecked = checked.filter(ingredient => commonIngredients.includes(ingredient));
      setChecked(updatedChecked);
      setAllIngredientsSelected(false);
    }
  }

  const toggleIncludeCommonIngredients = () => {
    if (!commonIngredientsSelected) {
      const updatedCheckedSet: Set<string> = new Set([...checked, ...commonIngredients]);
      const updatedChecked: string[] = Array.from(updatedCheckedSet);
      setChecked(updatedChecked);
      setCommonIngredientsSelected(true);
    } else if (commonIngredientsSelected && !allIngredientsSelected) {
      setCommonIngredientsSelected(false);
      const updatedChecked = checked.filter(ing => !commonIngredientRows.map(row => row.name).includes(ing));
      setChecked(updatedChecked);
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Box>
      <Stack direction='row' alignItems='center' gap='1em'>
        {/* <Typography color='#616161' fontSize='1.7em'>{infoText}</Typography> */}
        <Button variant='outlined' size='large' onClick={handleOpen} sx={{padding: '1em'}}>{btnText}</Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-add-ingredients'
        aria-describedby='modal-add-ingredients-here'
      >
        <Box sx={modalStyle}>
          <IngredientSearchbar  
            ingredients={rows.map(row => row.name)}
            checked={checked}
            setChecked={setChecked}
            handleToggleChecked={handleToggleChecked}
            toggleAddRemoveRow={toggleAddRemoveRow}
            searchTxt={searchText}
            />
            <FormGroup sx={{flexDirection: 'row', alignItems: 'center', padding:'2em'}}>
              <FormControlLabel control={<Switch defaultChecked onChange={toggleIncludeCommonIngredients} />} label='Include common ingredients'/> 
              <FormControlLabel control={<Switch onChange={toggleIncludeAllPantryIngredients}/>} label='Include all pantry ingredients'/> 
            </FormGroup>
            <Box padding='1em' ></Box>
          <IngredientsAccordion checked={checked} columns={pantryColumns} selectedRows={selectedRows} toggleAddRemoveRow={toggleAddRemoveRow} />
          <Box sx={{width: '100%', height: '100', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '1em'}}>
            <Button size='large' variant='contained' onClick={getRecipes}>Add Ingredients</Button>          
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default AddIngredientModal;