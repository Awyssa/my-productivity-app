import "@/styles/global.css";

const layout = ({ children } : any) =>
{
	return (
		<html lang="en">
			<head />
			<body className="h-screen w-screen rainbow-mesh p-6">
				<div className="w-full h-full flex items-center justify-center">
					{children}
				</div>
			</body>
		</html>
	);
};

export default layout;