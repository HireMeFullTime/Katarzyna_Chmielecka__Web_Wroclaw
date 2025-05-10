import type {FC} from 'react';

import type {ButtonProps} from '../types/types';

const Button: FC<ButtonProps> = ({name, onClick, disabled}) => {
	const isDisabled = disabled === true;
	return (
		<button onClick={onClick} disabled={isDisabled}>
			{name}
		</button>
	);
};
export default Button;
