import React from 'react';

type Props = {
	value: string;
	className?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Field({ value, onClick, className }: Props)
{
	return (
		<button className={className + " field"} onClick={onClick}>{value}</button>
	);
}

export default Field;