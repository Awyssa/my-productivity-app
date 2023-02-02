const RootLayout = ({ children }: { children: React.ReactNode }) =>
{
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body style={{ backgroundColor: "black", color: "white"}}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
