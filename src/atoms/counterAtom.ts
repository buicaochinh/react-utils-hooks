import { atom, RecoilState } from 'recoil'

const counterState: RecoilState<number> = atom<number>({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default counterState
