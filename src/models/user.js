export default class User {
  constructor(username, password, tokenJWT) {
    this.username = username;
    this.password = password;
    this.tokenJWT = tokenJWT;
    this.recettesLiked = [];
  }

  recetteIsLiked(idRecette) {
    for (const recette in this.recetteLiked) {
      if (recette._id === idRecette) return true;
    }
    return false;
  }
}
