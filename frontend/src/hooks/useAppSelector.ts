import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/store'

const hook: TypedUseSelectorHook<RootState> = useSelector;
export default hook;
