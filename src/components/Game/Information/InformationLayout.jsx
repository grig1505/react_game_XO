import styles from "./Information.module.css";
import PropTypes from "prop-types";

function InformationLayout({ statusMessage }) {
	return <div className={styles.message}>{statusMessage}</div>;
}
InformationLayout.propTypes = {
	statusMessage: PropTypes.string.isRequired,
};
export default InformationLayout;