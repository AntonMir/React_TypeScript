// Membership - членство
enum Membership {
    Simple,
    Standard,
    Premium,
}

const membershipPos = Membership.Premium // membershipPos === 2 (index = 2)
const membershipReverse = Membership[1] // membershipReverse === Standard (Standard index = 1)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM',
}

const chosenSocial = SocialMedia.FACEBOOK // chosenSocial === 'FACEBOOK'
