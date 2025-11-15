// LoaderOverlay.jsx
import { FallingLines } from 'react-loader-spinner'
import s from './LoaderOverlay.module.scss'

export const LoaderOverlay = ({ visible }) => {
    if (!visible) return null

    return (
        <div className={s.loaderOverlay}>
            <FallingLines color="#f58e54" width="200" visible={true} ariaLabel="falling-circles-loading" />
        </div>
    )
}
