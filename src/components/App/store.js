import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from '../../pages/ServicePage/ServicesSlice'
import newsReducer from '../../pages/MainPage/NewsSlice'
import profileReducer from '../../pages/ProfilePage/ProfileSlice'


export default configureStore({
  reducer: {
    services: servicesReducer,
    news: newsReducer,
    profile: profileReducer,
  }
})
