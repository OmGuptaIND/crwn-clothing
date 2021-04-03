import { createSelector } from "reselect";

//Basically Select Shop State from Redux Global Data Layer;
const selectItem = (state) => state.shop;
//Then this means that I want to do with the selected State is to go iniside the state on the reducer and select the data inside there Check shop.reducer for this
const selectShop = createSelector([selectItem], (item) => item.collections);
const selectCollectionsItems = passedParam => createSelector(
    [selectShop],
    collections => collections.find(item => item.routeName === passedParam)
)

export { selectShop, selectCollectionsItems };
