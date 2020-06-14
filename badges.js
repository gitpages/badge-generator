/**
 * Handle rendering of each badge and all badges.
 */

const SHIELDS_API = 'https://img.shields.io',
    SHIELDS_BADGE = `${SHIELDS_API}/badge`,
    SHIELDS_GH = `${SHIELDS_API}/github`,
    GITHUB = 'https://github.com',
    DEFAULT_COLOR = 'blue',
    DEFAULT_BRANCH = 'master';

const STYLES = {
    FOR_THE_BADGE: '?style=for-the-badge',
    SOCIAL: '?style=social'
};

/** Make a markdown badge for any inputs. Escapes URLs.
 *  TODO: Avoid escaping if interal URLs.
 **/
function makeBadge(title, imgUrl, target) {
    imgUrl = encodeURI(imgUrl);
    target = encodeURI(target);

    return `[![${title}](${imgUrl})](${target})`;
}

function ghURL(username, repoName) {
    return `${GITHUB}/${username}/${repoName}`;
}

function ghPagesURL(username, repoName) {
    return `https://${username}.github.io/${repoName}/`;
}

function useThisTemplateBadge(show, username, repoName) {
    if (show && username && repoName) {
        var text = 'Use_this_template',
            color = 'green';

        var title = 'Use this template',
            imgUrl = `${SHIELDS_BADGE}/${text}-${color}${STYLES.FOR_THE_BADGE}`,
            repoUrl = ghURL(username, repoName),
            extUrl = `${repoUrl}/generate`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function tagBadge(username, repoName) {
    if (username && repoName) {
        var title = 'GitHub tag',
            imgUrl = `${SHIELDS_GH}/tag/${username}/${repoName}`;

        var repoUrl = ghURL(username, repoName),
            extUrl = `${repoUrl}/tags/`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function licenseBadge(licenseType, username, repoName, localLicense = true) {
    if ((licenseType, username, repoName)) {
        var title = `License: ${licenseType}`,
            imgUrl = `${SHIELDS_BADGE}/License-${licenseType}-${DEFAULT_COLOR}.svg`;

        if (localLicense) {
            var target = '#license';
        }
        else {
            var target = `${GITHUB}/${username}/${repoName}/blob/${DEFAULT_BRANCH}/LICENSE`;
        }

        return makeBadge(title, imgUrl, target);
    }
    return '';
}

function _ghSocialShield(type, username, repoName) {
    return `${SHIELDS_GH}/${type}/${username}/${repoName}${STYLES.SOCIAL}`;
}

function ghSocial(username, repoName, type, usePreLabel = false) {
    if (!username && !repoName && !type) {
        return '';
    }

    var shield = _ghSocialShield(type, username, repoName);
    var target = ghURL(username, repoName);

    var preLabel = usePreLabel ? `${username}/${repoName} ` : '';

    return `[${preLabel}![Repo ${type}](${shield})](${target})`;
}

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
function genericBadge(params) {
    const { preLabel, postLabel, color, isLarge, target } = params;
    if (!postLabel) {
        return '';
    }

    var title = [
        preLabel,
        postLabel
    ].join(' ');

    if (preLabel) {
        var pieces = [
            preLabel,
            postLabel,
            color
        ];
    }
    else {
        var pieces = [
            postLabel,
            color
        ];
    }
    var shield = pieces.join('-').replace(' ', '_'),
        style = isLarge ? STYLES.FOR_THE_BADGE : '',
        imgUrl = `${SHIELDS_BADGE}/${shield}${style}`;

    return makeBadge(title, imgUrl, target);
}

function ghPagesBadge(username, repoName) {
    var params = {
        preLabel: 'View site',
        postLabel: 'GH Pages',
        color: 'green',
        isLarge: true,
        target: ghPagesURL(username, repoName)
    };

    return genericBadge(params);
}

// TODO: Refactor to use a class.
function makeBadges() {
    var username = $('input[name="username"').val(),
        repoName = $('input[name="repo-name"').val(),
        licenseType = $('input[name="license-type"').val(),
        useThisTemplateIsChecked = $('input[name="use-this-template"').prop('checked'),
        useGHPagesIsChecked = $('input[name="use-gh-pages"').prop('checked');

    var generics = {
        preLabel: $('input[name="generic-pre-label"]').val(),
        postLabel: $('input[name="generic-post-label"]').val(),
        color: $('input[name="generic-color"]').val(),
        isLarge: $('input[name="generic-large"]').prop('checked'),
        target: $('input[name="generic-target"]').val()
    };

    return {
        tag: tagBadge(username, repoName),
        license: licenseBadge(licenseType, username, repoName),
        useThisTemplate: useThisTemplateBadge(useThisTemplateIsChecked, username, repoName),
        viewSite: useGHPagesIsChecked ? ghPagesBadge(username, repoName) : '',

        stars: ghSocial(username, repoName, 'stars'),
        forks: ghSocial(username, repoName, 'forks'),
        starsExtended: ghSocial(username, repoName, 'stars', true),
        forksExtended: ghSocial(username, repoName, 'forks', true),

        generic: genericBadge(generics)
    };
}