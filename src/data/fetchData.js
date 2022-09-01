const quoteData = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
        // headers: { 'X-Api-Key': 'QKl3VpwkMQ6BEkaLAJODEQ==Suw2eEsq9bhICMmU' },
        headers: { 'X-Api-Key': 'dummykey' },
    });
    const jres = await response.json();
    console.log(jres);
    return jres;
};

export default quoteData;