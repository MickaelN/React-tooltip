const Test = () => {
    return(
        <div>
            <p>Pour recevoir un lien vers la modification de son ot de passe</p>
            <p>Veuillez entrer votre adresse email</p>
            <form>
                <label htmlFor="mail">Adresse email : </label>
                    <input type="email" name="mail" id="mail" />
            </form>
        </div>
    )
}

export default Test