import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import Header from "./header";
import Footer from "./footer";

const name = "Oscar Dobson-Brown";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<>
			<Header></Header>

			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</>
	);
}
