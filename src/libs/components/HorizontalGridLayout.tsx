import { config, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

type IProps = {
    data: any[];
    renderItem: (item: any, index: number) => JSX.Element;
}

export const HorizontalGridLayout = (props: IProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useSpring(() => ({
        x: 0,
        onChange: (props: any) => {
            divRef.current?.scroll(props.value.x, 0);
        },
        config: config.molasses
    }));

    const _handleScroll = (event: WheelEvent) => {
        setX({
            x: x.x.get() + (event.deltaY * 5)
        });
    }

    useEffect(() => {
        const ref = divRef?.current;
        ref?.addEventListener('wheel', _handleScroll, {passive: true});
        return () => {
            ref?.removeEventListener('wheel', _handleScroll)
        }
    }, []);

    const _onDrag = (event: any) => {
        console.log("draggg", event);
    }

    const _renderItem = (item: any, index: number) => {
        return (
            <div
                key={index}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
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
                flexDirection: 'row',
                overflowX: 'hidden',
                overflowY: 'hidden',
            }}
            onTouchMove={_onDrag}
        >
                {props.data.map(_renderItem)}
        </div>
    )
}