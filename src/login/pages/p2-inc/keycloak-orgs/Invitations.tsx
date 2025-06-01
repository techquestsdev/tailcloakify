import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../../../KcContext";
import type { I18n } from "../../../i18n";
import { clsx } from "keycloakify/tools/clsx";

export default function Invitations(props: PageProps<Extract<KcContext, { pageId: "invitations.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msgStr } = i18n;

    const { invitations, url } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            displayRequiredFields={false}
            displayMessage={false}
            headerNode={msgStr("p2incOrgsTitle")}
        >
            <div>
                <div id="kc-terms-text" className={"text-primary-600 dark:text-primary-300"}>
                    {msgStr("p2incOrgsText")}
                </div>
                <form className="form-actions" action={url.loginAction} method="POST">
                    {invitations.orgs.map((org, index) => (
                        <div key={index} className="checkbox">
                            <label className="text-secondary-600 dark:text-secondary-300">
                                <input id={`org-${org.id}`} name="orgs" type="checkbox" value={org.id} checked className={"accent-primary-600 dark:accent-primary-300 bottom-1/4"} /> {org.displayName}
                            </label>
                        </div>))}
                    <input
                        className={clsx(
                            kcClsx("kcButtonClass", "kcButtonBlockClass", "kcButtonLargeClass"),
                            "rounded-md bg-primary-600 dark:bg-primary-300 text-white dark:text-black focus:ring-primary-600 dark:focus:ring-primary-300 hover:bg-primary-700 dark:hover:bg-primary-400 px-4 py-2 text-sm flex justify-center relative w-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                        )}
                        name="accept" id="kc-accept" type="submit" value={msgStr("doAccept")}
                    />
                </form>
                <div className="clearfix"></div>
            </div >
        </Template >
    );
}