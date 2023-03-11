import "@/styles/global.css"
import clsx from "clsx";

export interface props {
	children?: React.ReactNode
	className?: React.ReactNode
}

const GlassPane = ({ children, className }: props) =>
{
	return <div className={clsx("glass rounded-2xl border-solid border-2 border-gray-200", className)}>
		{children}
	</div>;
};

export default GlassPane;

