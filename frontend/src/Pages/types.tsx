import { ReactElement, ReactNode } from 'react';


export type ComponentPropsType = {
  children: ReactNode | ReactElement | String
};
export type Component = () => ReactElement;
export type ParentComponent = (props: ComponentPropsType) => ReactElement;
