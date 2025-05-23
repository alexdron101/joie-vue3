export const startCursor = () => {




  document.querySelectorAll('.forma-up').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('div#body-back-fon').classList.add('act');
        document.querySelector('body').classList.add('no-scroll');
        document.querySelector('.forma-main').classList.add('act');
    });
});

function closeForm() {
    document.querySelector('div#body-back-fon').classList.remove('act');
    document.querySelector('body').classList.remove('no-scroll');
    document.querySelector('.forma-main').classList.remove('act');
}

document.querySelector('div#body-back-fon').addEventListener('click', closeForm);
document.querySelector('.forma-main-x').addEventListener('click', closeForm);




    // List of sentences
    var _CONTENT = [
      "quality",
      "responsiveness",
      "stability",
      "simplicity",
      "design",
      "creative"
    ];

    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector(".typed-text");

    // Cursor element 
    var _CURSOR = document.querySelector(".cursore");

    // Implements typing effect
    function Type() {
      // Get substring with 1 characater added
      var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX++;

      // If full sentence has been displayed then start to delete the sentence after some time
      if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
          _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
      }
    }

    // Implements deleting effect
    function Delete() {
      // Get substring with 1 characater deleted
      var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX--;

      // If sentence has been deleted then start to display the next sentence
      if (text === '') {
        clearInterval(_INTERVAL_VAL);

        // If current sentence was last then display the first one, else move to the next
        if (_PART == (_CONTENT.length - 1))
          _PART = 0;
        else
          _PART++;

        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
          _CURSOR.style.display = 'inline-block';
          _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
      }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);





    window.HUB_EVENTS = { ASSET_ADDED: "ASSET_ADDED", ASSET_DELETED: "ASSET_DELETED", ASSET_DESELECTED: "ASSET_DESELECTED", ASSET_SELECTED: "ASSET_SELECTED", ASSET_UPDATED: "ASSET_UPDATED", CONSOLE_CHANGE: "CONSOLE_CHANGE", CONSOLE_CLOSED: "CONSOLE_CLOSED", CONSOLE_EVENT: "CONSOLE_EVENT", CONSOLE_OPENED: "CONSOLE_OPENED", CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND", CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE", EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE", EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE", EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE", EMBED_RESHOWN: "EMBED_RESHOWN", FORMAT_FINISH: "FORMAT_FINISH", FORMAT_ERROR: "FORMAT_ERROR", FORMAT_START: "FORMAT_START", IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS", IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE", KEY_PRESS: "KEY_PRESS", LINTER_FINISH: "LINTER_FINISH", LINTER_START: "LINTER_START", PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER", PEN_CHANGE: "PEN_CHANGE", PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE", PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD", PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS", PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND", PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL", PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED", PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST", PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES", PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE", PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER", PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE", PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE", PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE", PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL", PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP", PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME", PEN_ERRORS: "PEN_ERRORS", PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE", PEN_LOGS: "PEN_LOGS", PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE", PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL", PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH", PEN_PREVIEW_START: "PEN_PREVIEW_START", PEN_SAVED: "PEN_SAVED", POPUP_CLOSE: "POPUP_CLOSE", POPUP_OPEN: "POPUP_OPEN", POST_CHANGE: "POST_CHANGE", POST_SAVED: "POST_SAVED", PROCESSING_FINISH: "PROCESSING_FINISH", PROCESSING_START: "PROCESSED_STARTED" }, "object" != typeof window.CP && (window.CP = {}), window.CP.PenTimer = { programNoLongerBeingMonitored: !1, timeOfFirstCallToShouldStopLoop: 0, _loopExits: {}, _loopTimers: {}, START_MONITORING_AFTER: 2e3, STOP_ALL_MONITORING_TIMEOUT: 5e3, MAX_TIME_IN_LOOP_WO_EXIT: 2200, exitedLoop: function (E) { this._loopExits[E] = !0 }, shouldStopLoop: function (E) { if (this.programKilledSoStopMonitoring) return !0; if (this.programNoLongerBeingMonitored) return !1; if (this._loopExits[E]) return !1; var _ = this._getTime(); if (0 === this.timeOfFirstCallToShouldStopLoop) return this.timeOfFirstCallToShouldStopLoop = _, !1; var o = _ - this.timeOfFirstCallToShouldStopLoop; if (o < this.START_MONITORING_AFTER) return !1; if (o > this.STOP_ALL_MONITORING_TIMEOUT) return this.programNoLongerBeingMonitored = !0, !1; try { this._checkOnInfiniteLoop(E, _) } catch (N) { return this._sendErrorMessageToEditor(), this.programKilledSoStopMonitoring = !0, !0 } return !1 }, _sendErrorMessageToEditor: function () { try { if (this._shouldPostMessage()) { var E = { topic: HUB_EVENTS.PEN_ERROR_INFINITE_LOOP, data: { line: this._findAroundLineNumber() } }; parent.postMessage(E, "*") } else this._throwAnErrorToStopPen() } catch (_) { this._throwAnErrorToStopPen() } }, _shouldPostMessage: function () { return document.location.href.match(/boomboom/) }, _throwAnErrorToStopPen: function () { throw "We found an infinite loop in your Pen. We've stopped the Pen from running. More details and workarounds at https://blog.codepen.io/2016/06/08/can-adjust-infinite-loop-protection-timing/" }, _findAroundLineNumber: function () { var E = new Error, _ = 0; if (E.stack) { var o = E.stack.match(/boomboom\S+:(\d+):\d+/); o && (_ = o[1]) } return _ }, _checkOnInfiniteLoop: function (E, _) { if (!this._loopTimers[E]) return this._loopTimers[E] = _, !1; var o; if (_ - this._loopTimers[E] > this.MAX_TIME_IN_LOOP_WO_EXIT) throw "Infinite Loop found on loop: " + E }, _getTime: function () { return +new Date } }, window.CP.shouldStopExecution = function (E) { var _ = window.CP.PenTimer.shouldStopLoop(E); return !0 === _ && console.warn("[CodePen]: An infinite loop (or a loop taking too long) was detected, so we stopped its execution. More details at https://blog.codepen.io/2016/06/08/can-adjust-infinite-loop-protection-timing/"), _ }, window.CP.exitedLoop = function (E) { window.CP.PenTimer.exitedLoop(E) };
    const updateProperties = (elem, state) => {

      elem.style.setProperty('--x', `${state.x}px`)
      elem.style.setProperty('--y', `${state.y}px`)
      elem.style.setProperty('--width', `${state.width}px`)
      elem.style.setProperty('--height', `${state.height}px`)
      elem.style.setProperty('--radius', state.radius)
      elem.style.setProperty('--scale', state.scale)

    }

    document.querySelectorAll('.cursor').forEach((cursor) => {

      let onElement

      const createState = (e) => {

        const defaultState = {
          x: e.clientX,
          y: e.clientY,
          width: 42,
          height: 42,
          radius: '100px'
        }

        const computedState = {}

        if (onElement != null) {
          const { top, left, width, height } = onElement.getBoundingClientRect()
          const radius = window.getComputedStyle(onElement).borderTopLeftRadius

          computedState.x = left + width / 2
          computedState.y = top + height / 2
          computedState.width = width
          computedState.height = height
          computedState.radius = radius
        }

        return {
          ...defaultState,
          ...computedState
        }

      }

      document.addEventListener('mousemove', (e) => {
        const state = createState(e)
        updateProperties(cursor, state)
      })

      document.querySelectorAll('a, button').forEach((elem) => {
        elem.addEventListener('mouseenter', () => onElement = elem)
        elem.addEventListener('mouseleave', () => onElement = undefined)
      })

    })
  }