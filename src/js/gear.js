const GEAR = {
  basic_gear: {
    angel_feather: {
      cost: 3,
      dmg: 0,
      hp: 1, 
      sepc: 1,
      type: 'soul',
    },
    ring_of_remnai: {
      cost: 3,
      dmg: 0,
      hp: 1,
      sepc: 1,
      type: 'intelligence',
    },
    badge_of_heroism: {
      cost: 3,
      dmg: 1,
      hp: 0,
      sepc: 1,
      type: 'courage',
    },
    blank_totem : {
      cost: 3,
      dmg: 0,
      hp: 1,
      sepc: 1,
      type: 'aura',
    },
    loaded_die: {
      cost: 3,
      dmg: 1,
      hp: 0,
      sepc: 1,
      type: 'luck',
    },
  },
  intermediate_gear: {
    exxo_armor: {
      cost: 5,
      dmg: 0,
      hp: 3,
      sepc: 2,
      type: 'soul',
    },
    trinity_staff: {
      cost: 5,
      dmg: 1,
      hp: 2,
      sepc: 2,
      type: 'intelligence',
    },
    darkling_sword : {
      cost: 5,
      dmg: 3,
      hp: 0,
      sepc: 2,
      type: 'courage',
    },
    illumination_pendant : {
      cost: 5,
      dmg: 0,
      hp: 3,
      sepc: 2,
      type: 'aura',
    },
    broken_dagger: {
      cost: 5,
      dmg: 2,
      hp: 1,
      sepc: 2,
      type: 'luck ',
    },
  },
  standard_gear: {
    thirstfire: {
      cost: 5,
      effect: 'Enemies the equipped User attacks are debuffed with Bleed',
    },
    mugger_dagger: {
      cost: 5,
      effect: 'Equipped User gains +1G every successful attack on an Enemy if succession roll',
    },
    bones: {
      cost: 5,
      dmg: 1,
      hp: 5,
      effect: 'Equipped User is debuffed with Undead', // TODO
    },
    lucky_charm: {
      cost: 5,
      dmg: 1,
      hp: 1,
      effect: 'Equipped User gains +2 succession roll',
    },
    devil_charm: {
      cost: 5,
      dmg: 3,
      hp: 3,
      effect: 'Equipped User gains -1 succession roll',
    },
    courage_charm: {
      cost: 5,
      dmg: 2,
      hp: 1,
      effect: 'Equipped User gains +1 decisive roll in battle involving User',
    },
    artifact_coin: {
      cost: 5,
      dmg: 2,
      hp: 2,
      effect: 'Item is treated as 5G', // TODO
    },
    absorbing_spirit: {
      cost: 5,
      dmg: 2,
      hp: 2,
      effect: 'Equipped User\'s Ultimate recharge rate is 2', // TODO
    },
  },
  legendary_gear: {
    'wilhelm\'s_gauntlet': {
      cost: 15,
      dmg: 0,
      hp: 5,
      effect: 'When the equipped User blocks an attack, deal DMG equal to the equipped User\'s DMG to the attacking enemy. Can only be equipped by Guardians',
      sepc: 3,
      type: 'soul',
    },
    'solomon\'s_cipher': {
      cost: 15,
      dmg: 2,
      hp: 3,
      effect: 'Equipped User can attack and use their abilities in the same turn. Can only be equipped by Spellweavers',
      sepc: 3,
      type: 'intelligence',
    },
    'zatyr\'s_saber': {
      cost: 15,
      dmg: 5,
      hp: 0,
      effect: 'Successful attacks on enemies heal equipped User by 2HP. Can only be equipped by Slayers',
      sepc: 3,
      type: 'courage',
    },
    'magus\'_cloak': {
      cost: 15,
      dmg: 1,
      hp: 4,
      effect: 'Equipped User is immune to debuffs. Can only be equipped by Enchanters', // TODO
      sepc: 3,
      type: 'aura',
    },
    'weeper\'s_satchel': {
      cost: 15,
      dmg: 3,
      hp: 2,
      effect: '+1 Item, +XG equal to dice roll, +1 consumable Item slot and +1 succession roll. Can only be equipped by Tricksters',
      sepc: 3,
      type: 'luck',
    }
  },
};

let $GEAR_SELECT = null;

{
  const options = {};
  for (categoryName in GEAR) {
    options[categoryName] = Object.keys(GEAR[categoryName]);
  }

  $GEAR_SELECT = makeSelect(options, 'js-gear-select', false);
}
