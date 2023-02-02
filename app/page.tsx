import Link from "next/link";

const Page = () =>
{
	return (
		<div style={{
			width: "100%",
			height: "50vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column"
		}}>
			<p>Welcome to My Productivity App!</p>
			<Link href="/register">
				<button
					style={{
						width: "200px",
						backgroundColor: "black",
						color: "white",
						border:"1px solid white",
						padding: "10px 5px",
						borderRadius: "8px",
						cursor: "pointer"
					}}
				>Enter
				</button>
			</Link>
		</div>
	);
};

export default Page;