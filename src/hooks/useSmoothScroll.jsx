import { scroller } from 'react-scroll'

const HEADER_OFFSET = 20

export const useSmoothScroll = () => {
    const scrollTo = (target, offset = HEADER_OFFSET) => {
        scroller.scrollTo(target, {
            duration: 600,
            smooth: true,
            offset,
        })
    }

    return { scrollTo }
}
