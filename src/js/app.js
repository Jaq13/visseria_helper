// TODO: code
// * save to local storage
// * load from local storage
// * add versioning to storage
// * convert , and . to - and +
// * update with latest doc
//
// TODO: basic styles
// * get icons?

$(function () {
  const MAX_CHARACTERS = 5;
  const SAVE_DELAY = 5000;

  const $storagePrompt = $('.js-storage-prompt');
  const $template = $('.js-character-template .js-character');
  const $keyShards = $('.js-key-shards');
  const $mainContent = $('.js-main-content');
  const $addButton = $('.js-add-character');

  let storage = null;
  let savePid = null;

  function addCharacter() {
    const $character = $template.clone();
    $character.data('character', new Character($character));
    $character.insertBefore($addButton.parent());
  }

  function checkCharacterLimit() {
    $mainContent.find('.js-character').length >= MAX_CHARACTERS ? $addButton.hide() : $addButton.show();
  }

  function queueSave() {
    console.log('queue save');
    window.clearTimeout(savePid);
    savePid = window.setTimeout(saveToStorage, SAVE_DELAY);
  }

  function saveToStorage() {
    console.log('saving...');
  }

  $addButton.on('click', function () {
    addCharacter();
    checkCharacterLimit();
  });

  $(document).on('change', queueSave);

  $keyShards.on('change', function () {
    const level = int($(this).val());
    $('.js-character').each(function (i, el) {
      const character = $(el).data('character');
      if (!character || !character.ready) return;
      character.updateLevel(level);
    });
  });

  $(document).on('click', '.js-delete-character', function () {
    $(this).closest('.js-character').remove();
    checkCharacterLimit();
    queueSave();
  });

  $(document).on('change', '.js-class-select', function () {
    const $character = $(this).closest('.js-character');
    const character = $character.data('character');
    character.changeClass($(this).val());

    $keyShards.trigger('change');
  });

  $(document).on('change', '.js-gear-select', function () {
    const character = $(this).closest('.js-character').data('character');
    if (!character.ready) return;
    const canWear = character.updateGear($(this).data('slot'), $(this).val());

    if (!canWear) $(this).val('-');
  });

  $(document).on('change', '.js-status-mod', function () {
    const character = $(this).closest('.js-character').data('character');
    if (!character.ready) return;
    character.mod($(this).data('status'));
  });

  $(document).on('change', '.js-hp-current, .js-recharge-current', function () {
    const character = $(this).closest('.js-character').data('character');
    if (!character.ready) return;
    character.updateCurrent($(this).data('status'));
  });

  for (let type of ['gear', 'ability']) {
    $(document).on('click', '.js-' + type + '-show-detail', function () {
      $(this).toggleClass('pressed');
      const $detail = $(this).parent().siblings('.js-' + type + '-detail');
      $detail.toggleClass('hidden');
    });
  }

  $(document).on('click', '.js-debuff input[type="checkbox"]', function () {
    $(this).parent().toggleClass('checked');
  });

  if (localStorage.visseria) {
    try {
      storage = JSON.parse(localStorage.visseria);
    } catch {
      storage = {};
    }

    // load key_shards / G from storage

    if (storage.characters) {
      // load from storage
    } else {
      addCharacter();
    }
  } else {
    $storagePrompt.removeClass('hidden').on('click', '.js-prompt-button', function () {
      if ($(this).data('answer') === 'yes') storage = {};
      $storagePrompt.remove();
    });
  }
});
