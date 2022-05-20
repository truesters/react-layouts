import React, { useEffect, useRef } from 'react'

interface IProps {
    data: any[];
    renderItem: (item: any, index: number) => JSX.Element;
}

const HorizontalGridLayout = (props: IProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const _handleScroll = (event: WheelEvent) => {
        console.log("scrolllong", event)
        divRef.current?.scrollBy(event?.deltaY * 10, 0)
    }

    useEffect(() => {
        const ref = divRef?.current;
        ref?.addEventListener('wheel', _handleScroll, {passive: true});
        return () => {
            ref?.removeEventListener('wheel', _handleScroll)
        }
    }, [])

    const _renderItem = (item: any, index: number) => {
        return (
            <div
                key={index}
                style={{
                    height: window.innerHeight/ 3,
                    minWidth: window.innerHeight/ 3,
                    scrollbarWidth: 'none',
                    scrollSnapAlign: 'start'
                }}
            >
                {props.renderItem(item, index)}
            </div>
        );
    }

    return (
        <div
            ref={divRef}
            style={{
                display: 'flex',
                overflowX: 'auto',
                alignItems: 'center',
                backgroundColor: 'red',
                scrollBehavior: 'smooth',
                scrollSnapType: 'x'
            }}
        >
            {/* <div style={{
                display: 'grid',
                gridTemplateRows: 'auto auto'
            }}> */}
                {props.data.map(_renderItem)}
            {/* </div> */}
        </div>
    )
}

export default HorizontalGridLayout