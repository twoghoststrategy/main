/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:07:30
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
module.exports = (api) => {
    api.cache(false)
    return {
        presets: [`babel-preset-gatsby`, `@babel/preset-react`, `@babel/preset-typescript`],
        plugins: [
        ],
    }
}
