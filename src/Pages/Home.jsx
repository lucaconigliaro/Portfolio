import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [currencies, setCurrencies] = useState({});
    const [from, setFrom] = useState("EUR");
    const [to, setTo] = useState("USD");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);

    // Carico le valute disponibili al primo render
    useEffect(() => {
        axios
            .get("https://api.frankfurter.app/currencies")
            .then((res) => setCurrencies(res.data))
            .catch((err) => console.error("Errore nel caricamento valute", err));
    }, []);

    // Funzione che esegue la conversione tra due valute
    const convert = () => {
        // Se le valute sono uguali, restituisci l'importo stesso
        if (from === to) {
            setResult(Number(amount));
            return;
        }

        axios
            .get("https://api.frankfurter.app/latest", {
                // Passaggio dei parametri come oggetto `params`
                // Axios li convertirà automaticamente in una query string:
                // es: ?amount=1&from=EUR&to=USD
                params: {
                    amount,
                    from,
                    to,
                },
            })
            .then((res) => {
                // Verifica che la risposta contenga i tassi di cambio
                // e che esista effettivamente il tasso per la valuta di destinazione
                if (res.data.rates && to in res.data.rates) {
                    setResult(res.data.rates[to]);
                } else {
                    console.error("Tasso di cambio non trovato per", to);
                    setResult(null);
                }
            })
            .catch((err) => {
                console.error("Errore nella conversione:", err);
                setResult(null);
            });
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center fw-bold">Convertitore di Valuta</h1>

            <div className="card shadow-sm p-4 mb-4 mx-auto" style={{ maxWidth: 480 }}>
                {/* Input importo */}
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label fw-semibold">
                        Importo
                    </label>
                    <input
                        id="amount"
                        type="number"
                        min="0"
                        step="any"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Inserisci importo"
                    />
                </div>

                {/* Selezione valute */}
                <div className="d-flex align-items-center mb-3 gap-2">
                    {/* Select valuta di partenza */}
                    <select
                        className="form-select flex-grow-1"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        aria-label="Valuta da convertire"
                    >
                        {Object.entries(currencies).map(([code, name]) => (
                            <option key={code} value={code}>
                                {code} - {name}
                            </option>
                        ))}
                    </select>

                    {/* Pulsante inversione valute */}
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        title="Inverti valute"
                        onClick={() => {
                            const temp = from;
                            setFrom(to);
                            setTo(temp);
                            setResult(null); // Reset del risultato
                        }}
                    >
                        ↔
                    </button>

                    {/* Select valuta di destinazione */}
                    <select
                        className="form-select flex-grow-1"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        aria-label="Valuta in cui convertire"
                    >
                        {Object.entries(currencies).map(([code, name]) => (
                            <option key={code} value={code}>
                                {code} - {name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Bottone per convertire */}
                <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={convert}
                >
                    Converti
                </button>

                {/* Risultato della conversione */}
                {result !== null && (
                    <div className="alert alert-success mt-3 mb-0 text-center fs-5 fw-semibold">
                        {amount} {from} = {result.toFixed(2)} {to}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;