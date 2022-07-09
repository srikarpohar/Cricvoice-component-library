import { useState } from "react";
import { IDropdownProps } from "../../../types/dropdown.types";
import './simple-dropdown.scss';

interface IState{
	showOptions: boolean
}

const initialState: IState = {
	showOptions: false
};

const SimpleDropdown = (props: IDropdownProps) => {
	const [state, setState] = useState<IState>(initialState);

	const onOptionClick = (event: any, onClick?: Function) => {
		event.preventDefault();
		if(onClick)
			onClick();
	}

	return (<div className="mx-5">
		<a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
			aria-expanded="false" onClick={() => setState({
				showOptions: !state.showOptions
			})}>
            	{props.title}
        </a>
		{state.showOptions && <ul className="dropdown-menu display-block" aria-labelledby="navbarDropdown">
			{props.options.map(doc => 
				<li key={doc.value.toString()} className="item">
					<a className="dropdown-item"
						onClick={(event) => onOptionClick(event, doc.onClick)}>
							{doc.label}
					</a>
				</li>)}
		</ul>}
	</div>);
}

export default SimpleDropdown;