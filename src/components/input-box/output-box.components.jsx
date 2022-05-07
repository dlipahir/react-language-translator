import { useEffect, useState } from "react";

const OutputBox = ({ value }) => {
    console.log(value)
    const [translatedText, setTransaltedText] = useState("");
    const { data, from, to } = value;
    useEffect(() => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("source_language", from);
        encodedParams.append("target_language", to);
        encodedParams.append("text", data);

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
                "X-RapidAPI-Key": "d149cd54a2msh866b75e1b9b1e4ap1de6cajsn77c0c5a256b4",
            },
            body: encodedParams,
        };
        if (data && from && to) {
            fetch("https://text-translator2.p.rapidapi.com/translate", options)
                .then((response) => response.json())
                .then((response) => { console.log(response.data.translatedText); setTransaltedText(response.data.translatedText); })
                .catch((err) => console.error(err));
        }
    }, [value])
    return (
        <div className="box">{translatedText}</div>
    )
}

export default OutputBox;
