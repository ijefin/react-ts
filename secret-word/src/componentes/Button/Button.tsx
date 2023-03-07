export const Button = ({ handleFunc, text }: any) => {
    return (
        <>
            <button onClick={handleFunc} className="play">{text}</button>
        </>
    )
}
