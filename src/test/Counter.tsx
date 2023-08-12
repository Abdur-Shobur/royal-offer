import { RootState } from '../store/store';
import { decrement, increment } from '../store/features/counter/CounterSlice';
import { useAppDispatch, useAppSelector } from '../store/hook';

export function Counter() {
	const count = useAppSelector((state: RootState) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}
