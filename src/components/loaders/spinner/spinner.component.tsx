import { useEffect, useState } from "react";
import { ILoaderProps } from "../../../types/loaders.types";
import './spinner.component.scss';

interface IState{
	open: boolean
}

const initialState: IState = {
	open: false
};

const Spinner = (props: ILoaderProps) => {
	const [state, setState] = useState<IState>(initialState);

	useEffect(() => {
		if(!props.show) {
			setTimeout(() => {
				setState({
					open: false
				})
			}, 1000);
		} else {
			setState({
				open: true
			})
		}
	}, [props.show]);

	if(state.open) {
		return (<div className="screen">
		<section className={`stage stage-${props.show ? 'open' : 'close'}`}>
			<figure className="ball">
				<span className="shadow"></span>
				<span className="line"></span>
			</figure>
		</section>

		<section className={`ground ground-${props.show ? 'open' : 'close'}`}>
		</section>

	</div>);
	} else
		return null;
}

export default Spinner;