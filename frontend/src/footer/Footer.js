import React from "react";

export default function Footer() {
  const currentYear = new Date();
  return (
		<footer className="footer">
			<p>
				&copy; Copyright. MAO Store {currentYear.getFullYear()}. All rights
				reserved. Designed & developed by
				<a href="http://mahmoudosman.com"> Mahmoud Osman</a>.
			</p>
		</footer>
	);
}
