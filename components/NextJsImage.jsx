import Image from "next/image";

const NextJsImage = ({ photo, imageProps, wrapperProps,layout }) => {
    const { width, height } = photo;
    const { src, alt, title, style, className, onClick } = imageProps;
    const { style: wrapperStyle, ...restWrapperProps } = wrapperProps ?? {};
    return (
        <div
            style={{
                width: style.width,
                padding: style.padding,
                marginBottom: style.marginBottom,
                ...wrapperStyle
            }}
            onClick={onClick}
            {...restWrapperProps}
            className="cursor-pointer"
        >
            <Image
                src={src}
                alt={alt}
                title={title}
                width={width}
                height={height}
                className={className}
            />
        </div>
    );
};

export default NextJsImage;