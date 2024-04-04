import PropTypes from 'prop-types';

const WooCommerceLogo = ( { height = 18, width = 97 } ) => {
	return (
		<svg
			className="woocommerce-logo"
			height={ height }
			width={ width }
			viewBox="0 0 113 23"
			version="1.1"
		>
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="woocommerce_logo" transform="translate(-1.000000, 0.000000)">
					<path
						fill="#7F54B3"
						fillRule="evenodd"
						d="M34.71 0H3.551A3.553 3.553 0 0 0 0 3.568V15.46a3.566 3.566 0 0 0 3.568 3.568h14.757l6.745 3.756-1.534-3.756h11.173a3.566 3.566 0 0 0 3.568-3.568V3.568A3.566 3.566 0 0 0 34.709 0ZM2.894 2.754c-.438.031-.767.188-.986.485-.219.282-.297.642-.25 1.049.923 5.868 1.784 9.827 2.582 11.877.313.751.673 1.111 1.095 1.08.658-.047 1.44-.955 2.363-2.723a293.572 293.572 0 0 1 2.254-4.507c.845 2.958 2.003 5.18 3.458 6.667.407.422.83.61 1.236.579.36-.032.642-.22.83-.564.156-.297.219-.641.188-1.033-.094-1.424.047-3.411.438-5.962.407-2.629.907-4.522 1.518-5.649.125-.235.172-.47.156-.751a1.226 1.226 0 0 0-.485-.892 1.36 1.36 0 0 0-.986-.313c-.454.031-.798.25-1.033.688-.97 1.769-1.658 4.633-2.065 8.607-.595-1.502-1.096-3.27-1.487-5.352-.172-.923-.595-1.361-1.283-1.314-.47.031-.86.344-1.174.939L5.837 12.19c-.563-2.269-1.095-5.039-1.58-8.31-.11-.813-.564-1.188-1.362-1.126ZM33.05 3.881c1.111.235 1.94.83 2.504 1.815.501.845.751 1.862.751 3.083 0 1.612-.407 3.083-1.22 4.429-.94 1.565-2.16 2.347-3.678 2.347-.266 0-.547-.031-.845-.094-1.11-.235-1.94-.83-2.504-1.815-.5-.86-.75-1.894-.75-3.099 0-1.612.406-3.082 1.22-4.413.955-1.565 2.175-2.347 3.677-2.347.266 0 .548.031.845.094Zm-.657 8.466c.58-.516.97-1.283 1.19-2.316.062-.36.109-.751.109-1.158 0-.454-.094-.939-.282-1.424-.234-.61-.547-.94-.923-1.017-.563-.11-1.111.203-1.627.97a5.06 5.06 0 0 0-.83 1.862c-.078.36-.11.751-.11 1.143 0 .453.095.938.282 1.424.235.61.548.938.924 1.017.39.078.813-.094 1.267-.501Zm-6.65-6.65c-.564-.987-1.409-1.581-2.504-1.816a4.109 4.109 0 0 0-.846-.094c-1.502 0-2.722.782-3.677 2.347-.814 1.33-1.22 2.801-1.22 4.413 0 1.205.25 2.238.75 3.099.564.986 1.393 1.58 2.504 1.815.298.063.58.094.846.094 1.517 0 2.738-.782 3.677-2.347.814-1.346 1.22-2.817 1.22-4.429 0-1.22-.25-2.238-.75-3.083ZM23.77 10.03c-.22 1.033-.61 1.8-1.19 2.316-.453.407-.876.579-1.267.5-.376-.078-.689-.406-.924-1.016a3.971 3.971 0 0 1-.281-1.425c0-.39.031-.782.11-1.142a5.06 5.06 0 0 1 .829-1.862c.516-.767 1.064-1.08 1.627-.97.376.078.689.407.924 1.017.187.485.281.97.281 1.424 0 .407-.031.798-.11 1.158Z"
						clipRule="evenodd"
					/>
					<path
						fill="#000"
						d="M42.236 5.557C41.187 6.59 40.67 7.904 40.67 9.501c0 1.705.516 3.098 1.55 4.147 1.032 1.048 2.378 1.58 4.052 1.58.485 0 1.033-.078 1.628-.25v-2.535c-.548.156-1.018.234-1.424.234-.83 0-1.487-.281-1.988-.83-.5-.563-.75-1.314-.75-2.268 0-.892.25-1.628.735-2.191.5-.579 1.11-.86 1.862-.86.485 0 1.001.078 1.565.234V4.227a6.536 6.536 0 0 0-1.706-.204c-1.596-.015-2.91.501-3.96 1.534Zm10.86-1.55c-1.44 0-2.566.486-3.38 1.44-.814.955-1.205 2.3-1.205 4.022 0 1.862.407 3.287 1.205 4.272.798.986 1.972 1.487 3.505 1.487 1.487 0 2.63-.5 3.427-1.487.798-.986 1.205-2.378 1.205-4.162 0-1.784-.407-3.161-1.22-4.132-.83-.954-2.003-1.44-3.537-1.44Zm1.236 8.138c-.281.438-.704.657-1.236.657-.5 0-.876-.219-1.142-.657-.266-.438-.392-1.314-.392-2.644 0-2.05.517-3.068 1.565-3.068 1.096 0 1.66 1.033 1.66 3.114-.017 1.284-.173 2.16-.455 2.598Zm11.252-7.84L65.02 6.7c-.14.61-.281 1.237-.406 1.878l-.313 1.659c-.298-1.659-.705-3.63-1.221-5.93h-3.63l-1.362 10.656h2.723l.735-7.34 1.863 7.34h1.94l1.784-7.324.767 7.324h2.848l-1.44-10.657h-3.724Zm13.035 0L78.056 6.7c-.141.61-.282 1.237-.407 1.878l-.313 1.659c-.297-1.659-.704-3.63-1.22-5.93h-3.631l-1.362 10.656h2.723l.736-7.34 1.862 7.34h1.94l1.769-7.324.767 7.324h2.848l-1.44-10.657h-3.709Zm8.857 6.447h2.551V8.546h-2.55V6.59h2.941V4.32h-5.821v10.658h5.837v-2.27h-2.958v-1.956Zm11.064-1.69c.297-.485.454-.986.454-1.502 0-1.001-.391-1.8-1.174-2.379-.782-.579-1.862-.876-3.208-.876h-3.349v10.657h2.88v-4.851h.047l2.331 4.851h3.036l-2.3-4.804c.548-.25.986-.61 1.283-1.096Zm-4.413-.172V6.355c.689.016 1.174.125 1.471.344.297.22.438.564.438 1.065 0 .735-.641 1.11-1.909 1.126Zm6.557-3.333c-1.049 1.033-1.565 2.347-1.565 3.944 0 1.705.516 3.098 1.549 4.147 1.033 1.048 2.379 1.58 4.053 1.58.485 0 1.033-.078 1.628-.25v-2.535c-.548.156-1.017.234-1.424.234-.83 0-1.487-.281-1.988-.83-.5-.563-.751-1.314-.751-2.268 0-.892.251-1.628.736-2.191.501-.579 1.111-.86 1.862-.86a5.85 5.85 0 0 1 1.565.234V4.227a6.543 6.543 0 0 0-1.706-.204c-1.58-.015-2.911.501-3.959 1.534Zm9.342 7.12v-1.94h2.551V8.53h-2.551V6.574h2.958V4.305h-5.821v10.657H113v-2.27h-2.974v-.015Z"
					/>
				</g>
			</g>
		</svg>
	);
};

WooCommerceLogo.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
};

export default WooCommerceLogo;
