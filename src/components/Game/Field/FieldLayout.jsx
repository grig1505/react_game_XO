import styles from "./field.module.css";
import PropTypes from "prop-types";
function FieldLayout({ field, OX }) {
	return (
		<>
			<div className={styles.fieldGame}>Игровое поле</div>
			<div className={styles.fieldGameGrid}>
				{field.map((cell, index) => (
					<div
						key={index}
						className={styles.fieldGameitem}
						disabled={cell !== ""}
						onClick={() => OX(index)}
					>
						{cell}
					</div>
				))}
			</div>
		</>
	);
}
FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	handleMove: PropTypes.func.isRequired,
};
export default FieldLayout;