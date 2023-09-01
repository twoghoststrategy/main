/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 15:38:12
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/31/2023
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react'
import { array, oneOf, PropTypes } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import "./logo.component.scss";
function LogoComponent(props) {
    const { type } = props
    const { classes } = props
    switch (type) {
    case `standard`:
        return (
            <>
                <StaticImage
                    src="../../images/logo/horizontal_white_twoghosts_logo.svg"
                    alt="White Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    className={`logostandard  ${classes}`}
                />
            </>
        )
    case `darkversion`:
        return (
            <>
                <StaticImage
                    src="../../images/logo/horizontal_twoghosts_logo.webp"
                    alt="Black Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    className={`logostandard ${classes}`}

                />
            </>
        )

    case `stackedwhite`:
        return (
            <>
                <StaticImage
                    src="../../images/logo/stacked_twoghosts_logo.webp"
                    alt="White Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={200}
                    className={`logostacked ${classes}`}
                />
            </>
        )
    case `stackeddark`:
        return (
            <>
                <StaticImage
                    src="../../images/logo/stacked_white_twoghosts_logo.webp"
                    alt="BlackLogo"
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    className={`logostacked ${classes}`}
                />
            </>
        )
    case `symbol`:
        return (
            <>
                <StaticImage
                    src="../../images/logo/symbol_twoghosts_logo.webp"
                    alt="Symbol"
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    className={`logosymbol ${classes}`}
                />
            </>
        )
    case `abbreviation`:
        return (
            <>
                <StaticImage
                    src="../../images/logo/abbreviation_twoghosts_logo.webp"
                    alt="Abbreviation"
                    placeholder="blurred"
                    layout="constrained"
                    width={170}
                    className={`logoab ${classes}`}
                />
            </>
        )
        case `abbreviationfooter`:
            return (
                <>
                    <StaticImage
                        src="../../images/logo/abbreviation_white_twoghosts_logo.webp"
                        alt="Abbreviation"
                        placeholder="blurred"
                        layout="constrained"
                        width={170}
                        className={`${classes}`}
                    />
                </>
            )
    default:
        return (
            <>
                <StaticImage
                    src="../../images/logo/horizontal_white_twoghosts.svg"
                    alt="Placeholder"
                    placeholder="blurred"
                    layout="constrained"
                    width={400}
                    className={`logostacked ${classes}`}
                />
            </>
        )
    }
}

LogoComponent.propTypes = {
    classes: PropTypes.string,

    type: PropTypes.oneOf([
        `standard`,
        `darkversion`,
        `stackedwhite`,
        `stackeddark`,
        `symbol`,
        `abbreviation`,
        `abbreviationwhite`,

    ]),
}
LogoComponent.defaultProps = {
    type: `standard`,
    classes: ``,

}

export default LogoComponent
