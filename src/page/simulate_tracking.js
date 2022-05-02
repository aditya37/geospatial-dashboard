import React, { useState, useEffect } from "react";
const SimulateTracking = () => {
	const [post, setPost] = useState({
		lat: 0,
		long: 0,
	});
	React.useEffect(async () => {
		setInterval(() => {
			if (navigator.geolocation) {
				navigator.geolocation.watchPosition((post) => {
					console.log(post);
					setPost({
						lat: post.coords.latitude,
						long: post.coords.longitude,
					});
				});
			}
		}, 1000);
	}, []);
	return (
		<>
			<div>
				<b>Lat : {post.lat}</b>
				<hr />
				<b>Long : {post.long}</b>
			</div>
		</>
	);
};

export default SimulateTracking;
