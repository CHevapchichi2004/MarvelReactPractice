const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(50,50)">
                <g transform="scale(0.52)">
                    <circle cx="0" cy="0" r="50" fill="#232222"></circle>
                    <circle cx="0" cy="-32" r="11" fill="#9f0013">
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
                    </circle>
                </g>
            </g>
        </svg>
        )
}
export default Spinner