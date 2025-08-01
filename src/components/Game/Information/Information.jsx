import InformationLayout from "./InformationLayout";
import PropTypes from "prop-types";
function Information({ isGameEnded, currentPlayer, isDraw }) {
	const getStatusMessage = () => {
		if (isDraw) return "Ничья!";
		if (isGameEnded) return `Победил: ${currentPlayer}!`;
		return `Сейчас ходит: ${currentPlayer}`;
	};

	return <InformationLayout statusMessage={getStatusMessage()} />;
}
Information.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
export default Information;