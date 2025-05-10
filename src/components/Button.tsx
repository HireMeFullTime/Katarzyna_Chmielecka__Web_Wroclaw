import type {FC} from 'react';

import type {ButtonProps} from '../types/types';

const Button: FC<ButtonProps> = ({name, onClick}) => {
	return <button onClick={onClick}>{name}</button>;
};
export default Button;
