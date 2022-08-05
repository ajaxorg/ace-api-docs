export namespace Ace {
    /**
     * @class Tooltip
     **/
    export class Tooltip {
        destroy(): void;
        /**
         * @returns {Number}
         **/
        getWidth(): Number;
        /**
         * @returns {Number}
         **/
        getHeight(): Number;
        hide(): void;
        /**
         * @param {String} text
         * @param {Number} x
         * @param {Number} y
         **/
        show(text: String, x: Number, y: Number): void;
        /**
         * @param {String} className
         **/
        setClassName(className: String): void;
        /**
         * @param {Number} x
         * @param {Number} y
         **/
        setPosition(x: Number, y: Number): void;
        /**
         * @param {String} html
         **/
        setHtml(html: String): void;
        /**
         * @param {String} text
         **/
        setText(text: String): void;
        /**
         * @returns {Element}
         **/
        getElement(): Element;
        $init(): any;
        /**
         * @param {Element} parentNode
         *
         * @constructor
         **/
        constructor(parentNode: Element);
    }

    export class MockRenderer {
        adjustWrapLimit(): void;
        screenToTextCoordinates(): { row: number; column: number; };
        textToScreenCoordinates(): { pageX: number; pageY: number; };
        unsetStyle(): void;
        setStyle(): void;
        setAnnotations(): void;
        visualizeFocus(): void;
        showCursor(): void;
        updateText(): void;
        updateFull(): void;
        onResize(): void;
        updateBreakpoints(): void;
        updateFrontMarkers(): void;
        updateBackMarkers(): void;
        updateLines(startRow: any, endRow: any): void;
        onChangeTabSize(startRow: any, endRow: any): void;
        draw(): void;
        getScrollTopRow(): any;
        scrollToRow(row: any): void;
        scrollCursorIntoView(): void;
        scrollSelectionIntoView(): void;
        scrollToLine(line: any, center: any): void;
        scrollToY(scrollLeft: any): void;
        scrollToX(scrollTop: any): void;
        animateScrolling(fromValue: any, callback: any): void;
        updateCursor(): void;
        on(): void;
        setTokenizer(): void;
        getSession(session: any): any;
        setSession(session: any): void;
        moveTextAreaToCursor(): void;
        removeGutterDecoration(): void;
        addGutterDecoration(): void;
        getTextAreaContainer(): any;
        getMouseEventTarget(): any;
        getContainerElement(): any;
        getLastFullyVisibleRow(): any;
        getFirstFullyVisibleRow(): any;
        getLastVisibleRow(): any;
        getFirstVisibleRow(): any;
    }

    export class TextNode {
        cloneNode(): any;
    }

    export class Event {
        stopPropagation(): void;
        preventDefault(): void;
        initMouseEvent(type: any, _1: any, _2: any, window: any, detail: any, x: any, y: any, _x: any, _y: any, ctrl: any, alt: any, shift: any, meta: any, button: any, relatedTarget: any): void;
    }

    export class Node {
        blur(): void;
        focus(): void;
        contains(node: any): boolean;
        dispatchEvent(e: any): void;
        createEvent(v: any): any;
        removeEventListener(name: any, listener: any): void;
        addEventListener(name: any, listener: any, capturing: any): void;
        getBoundingClientRect(v: any): { top: number; left: number; width: number; height: number; right: number; bottom: number; };
        insertAdjacentElement(position: any, element: any): void;
        insertAdjacentHTML(position: any, markup: any): void;
        ___format(indent: any): string;
        getAttribute(a: any, v: any): any;
        setAttribute(a: any, v: any): void;
        removeAttribute(a: any): void;
        closest(s: any): any;
        matches(selector: any): boolean;
        getElementById(s: any): any;
        getElementsByTagName(s: any): {};
        querySelector(s: any): any;
        querySelectorAll(selector: any): {};
        hasAttributes(): boolean;
        hasChildNodes(): boolean;
        before(node: any): void;
        insertBefore(node: any, before: any): any;
        replaceChild(node: any, oldNode: any): any;
        remove(): void;
        removeChild(node: any): void;
        appendChild(node: any): any;
        cloneNode(recursive: any): any;
    }

    export class Attr {
    }

    export class ClassList {
        contains(str: any): void;
        toggle(str: any): void;
        remove(str: any): void;
        add(str: any): void;
    }

    export class Style {
        getPropertyValue(): string;
    }

    export class TestGenerator {
        setupTest(): any;
        summary(callback: any): void;
        report(): any;
        run(): any;
        exec(): void;
    }

    export class Generator {
        toArray(breakOnError: any, callback: any): void;
        end(breakOnError: any, callback: any): void;
        $arrayOp(arrayMethod: any, args: any): any;
        reverse(): any;
        join(separator: any): any;
        sort(compare: any): any;
        expand(inserter: any, constructor: any): any;
        zip(generator: any): any;
        concat(generator: any): any;
        call(context: any): any;
        every(condition: any): any;
        some(condition: any): any;
        forEach(fn: any): any;
        each(fn: any): any;
        reduce(reduce: any, initialValue: any): any;
        slice(begin: any, end: any): any;
        filter(filter: any): any;
        map(mapper: any): any;
        next(callback: any): void;
    }

    /**
     * @class Split
     *
     **/
    export class Split {
        /**
         * Resizes the editor.
         **/
        resize(): void;
        /**
         *
         * Sets the orientation.
         * @param {Number} orientation The new orientation value
         *
         *
         **/
        setOrientation(orientation: Number): void;
        /**
         *
         * Returns the orientation.
         * @returns {Number}
         **/
        getOrientation(): Number;
        /**
         *
         * @param {EditSession} session The new edit session
         * @param {Number} idx The editor's index you're interested in
         *
         * Sets a new [[EditSession `EditSession`]] for the indicated editor.
         * @related Editor.setSession
         **/
        setSession(session: EditSession, idx: Number): any;
        $cloneSession(session: any): any;
        /**
         * @param {Number} size The new font size
         *
         * Sets the font size, in pixels, for all the available editors.
         *
         **/
        setFontSize(size: Number): void;
        /**
         *
         * @param {Function} callback A callback function to execute
         * @param {String} scope The default scope for the callback
         *
         * Executes `callback` on all of the available editors.
         *
         **/
        forEach(callback: Function, scope: String): void;
        /**
         *
         * @param {String} keybinding
         *
         * Sets the keyboard handler for the editor.
         * @related editor.setKeyboardHandler
         **/
        setKeyboardHandler(keybinding: String): void;
        /**
         *
         * @param {String} theme The name of the theme to set
         *
         * Sets a theme for each of the available editors.
         * @related Editor.setTheme
         **/
        setTheme(theme: String): void;
        /**
         * Blurs the current editor.
         * @related Editor.blur
         **/
        blur(): void;
        /**
         * Focuses the current editor.
         * @related Editor.focus
         **/
        focus(): void;
        /**
         *
         * Returns the current editor.
         * @returns {Editor}
         **/
        getCurrentEditor(): Editor;
        /**
         * @param {Number} idx The index of the editor you want
         *
         * Returns the editor identified by the index `idx`.
         *
         **/
        getEditor(idx: Number): any;
        /**
         *
         * Returns the number of splits.
         * @returns {Number}
         **/
        getSplits(): Number;
        setSplits(splits: any): void;
        $createEditor(): any;
    }

    export class TabstopManager {
        removeRange(range: any): void;
        removeTabstopMarkers(ts: any): void;
        addTabstopMarkers(ts: any): void;
        addTabstops(tabstops: any, start: any, end: any): void;
        selectTabstop(index: any): void;
        tabNext(dir: any): void;
        onChangeSession(): void;
        onChangeSelection(): void;
        onAfterExec(e: any): void;
        updateLinkedFields(): void;
        onChange(delta: any): void;
        detach(): void;
        attach(editor: any): void;
    }

    export class TabstopToken {
    }

    export class SnippetManager {
        getSnippetByName(name: any, editor: any): any;
        parseSnippetFile(str: any): {};
        unregister(snippets: any, scope: any): void;
        register(snippets: any, scope: any): void;
        findMatchingSnippet(snippetList: any, before: any, after: any): any;
        expandSnippetForSelection(editor: any, options: any): boolean;
        expandWithTab(editor: any, options: any): any;
        getActiveScopes(editor: any): {};
        $getScope(editor: any): any;
        insertSnippet(editor: any, snippetText: any): any;
        insertSnippetForSelection(editor: any, snippetText: any): void;
        resolveVariables(snippet: any, editor: any): {};
        tmFormatFunction(str: any, ch: any, editor: any): any;
        /** returns string formatted according to http://manual.macromates.com/en/regular_expressions#replacement_string_syntax_format_strings**/
        tmStrFormat(str: any, ch: any, editor: any): any;
        getVariableValue(editor: any, name: any, indentation: any): any;
        tokenizeTmSnippet(str: any, startState: any): any;
        createTokenizer(): any;
        getTokenizer(): any;
    }

    export class SearchHighlight {
        update(html: any, markerLayer: any, session: any, config: any): void;
        setRegexp(regExp: any): void;
    }

    /**
     * @class Search
     *
     * A class designed to handle all sorts of text searches within a [[Document `Document`]].
     *
     **/
    export class Search {
        $matchIterator(session: any, options: any): false | { forEach: (callback: any) => void; };
        $assembleMultilineRegExp(needle: any, modifier: any): {};
        $assembleRegExp(options: any, $disableFakeMultiline: any): any;
        /**
         * Searches for `options.needle` in `input`, and, if found, replaces it with `replacement`.
         * @param {String} input The text to search in
         * @param {String} replacement The replacing text
         * + (String): If `options.regExp` is `true`, this function returns `input` with the replacement already made. Otherwise, this function just returns `replacement`.<br/>
         * If `options.needle` was not found, this function returns `null`.
         *
         *
         * @returns {String}
         **/
        replace(input: String, replacement: String): String;
        /**
         * Searches for all occurrances `options.needle`. If found, this method returns an array of [[Range `Range`s]] where the text first occurs. If `options.backwards` is `true`, the search goes backwards in the session.
         * @param {EditSession} session The session to search with
         *
         *
         * @returns {[Range]}
         **/
        findAll(session: EditSession): [Range];
        /**
         * Searches for `options.needle`. If found, this method returns the [[Range `Range`]] where the text first occurs. If `options.backwards` is `true`, the search goes backwards in the session.
         * @param {EditSession} session The session to search with
         *
         *
         * @returns {Range}
         **/
        find(session: EditSession): Range;
        /**
         * Sets the search options via the `options` parameter.
         * @param {Object} An object containing all the search propertie
         * @related Search.set
         **/
        setOptions(options: any): void;
        /**
         * [Returns an object containing all the search options.]{: #Search.getOptions}
         * @returns {Object}
         **/
        getOptions(): Object;
        /**
         * Sets the search options via the `options` parameter.
         * @param {Object} options An object containing all the new search properties
         *
         *
         * @returns {Search}
         * @chainable
         **/
        set(options: Object): Search;
        /**
         *
         *
         * Creates a new `Search` object. The following search options are available:
         *
         * - `needle`: The string or regular expression you're looking for
         * - `backwards`: Whether to search backwards from where cursor currently is. Defaults to `false`.
         * - `wrap`: Whether to wrap the search back to the beginning when it hits the end. Defaults to `false`.
         * - `caseSensitive`: Whether the search ought to be case-sensitive. Defaults to `false`.
         * - `wholeWord`: Whether the search matches only on whole words. Defaults to `false`.
         * - `range`: The [[Range]] to search within. Set this to `null` for the whole document
         * - `regExp`: Whether the search is a regular expression or not. Defaults to `false`.
         * - `start`: The starting [[Range]] or cursor position to begin the search
         * - `skipCurrent`: Whether or not to include the current line in the search. Default to `false`.
         *
         * @constructor
         **/
        constructor();
    }

    /**
     * Represents a horisontal scroll bar.
     * @class HScrollBar
     **/
    export class HScrollBar {
        /**
         * Sets the scroll left of the scroll bar.
         * @param {Number} scrollTop The new scroll left
         **/
        setScrollLeft(scrollLeft: any): void;
        /**
         * Sets the scroll width of the scroll bar, in pixels.
         * @param {Number} width The new scroll width
         **/
        setScrollWidth(width: Number): void;
        /**
         * Sets the inner width of the scroll bar, in pixels.
         * @param {Number} width The new inner width
         * @deprecated Use setScrollWidth instead
         **/
        setInnerWidth(width: Number): void;
        /**
         * Sets the width of the scroll bar, in pixels.
         * @param {Number} width The new width
         **/
        setWidth(width: Number): void;
        /**
         * Returns the height of the scroll bar.
         * @returns {Number}
         **/
        getHeight(): Number;
        /**
         * Emitted when the scroll bar, well, scrolls.
         * @event scroll
         * @param {Object} e Contains one property, `"data"`, which indicates the current scroll left position
         **/
        on(name: 'scroll', callback: (e: Object) => void): void;
        onScroll(): void;
        /**
         * Creates a new `HScrollBar`. `parent` is the owner of the scroll bar.
         * @param {Element} parent A DOM element
         * @param {Object} renderer An editor renderer
         *
         * @constructor
         **/
        constructor(parent: Element, renderer: Object);
    }

    /**
     * Represents a vertical scroll bar.
     * @class VScrollBar
     **/
    export class VScrollBar {
        /**
         * Sets the scroll top of the scroll bar.
         * @param {Number} scrollTop The new scroll top
         **/
        setScrollTop(scrollTop: Number): void;
        /**
         * Sets the inner height of the scroll bar, in pixels.
         * @param {Number} height The new inner height
         * @deprecated Use setScrollHeight instead
         **/
        setInnerHeight(height: Number): void;
        /**
         * Sets the inner height of the scroll bar, in pixels.
         * @param {Number} height The new inner height
         * @deprecated Use setScrollHeight instead
         **/
        setScrollHeight(height: Number): void;
        /**
         * Sets the height of the scroll bar, in pixels.
         * @param {Number} height The new height
         **/
        setHeight(height: Number): void;
        /**
         * Returns the width of the scroll bar.
         * @returns {Number}
         **/
        getWidth(): Number;
        /**
         * Emitted when the scroll bar, well, scrolls.
         * @event scroll
         * @param {Object} e Contains one property, `"data"`, which indicates the current scroll top position
         **/
        on(name: 'scroll', callback: (e: Object) => void): void;
        onScroll(): void;
        /**
         * Creates a new `VScrollBar`. `parent` is the owner of the scroll bar.
         * @param {Element} parent A DOM element
         * @param {Object} renderer An editor renderer
         *
         * @constructor
         **/
        constructor(parent: Element, renderer: Object);
    }

    /**
     * An abstract class representing a native scrollbar control.
     * @class ScrollBar
     **/
    export class ScrollBar {
        setVisible(isVisible: any): void;
        /**
         * Creates a new `ScrollBar`. `parent` is the owner of the scroll bar.
         * @param {Element} parent A DOM element
         *
         * @constructor
         **/
        constructor(parent: Element);
    }

    /**
     *
     *
     * Batches changes (that force something to be redrawn) in the background.
     * @class RenderLoop
     **/
    export class RenderLoop {
        clear(change: any): any;
        schedule(change: any): void;
    }

    export class RangeList {
        $onChange(delta: any): void;
        detach(): void;
        attach(session: any): void;
        removeAll(): any;
        clipRows(startRow: any, endRow: any): {};
        rangeAtPoint(pos: any): any;
        containsPoint(pos: any): boolean;
        contains(row: any, column: any): boolean;
        /** merge overlapping ranges**/
        merge(): {};
        substractPoint(pos: any): any;
        addList(list: any): {};
        add(range: any): any;
        pointIndex(pos: any, excludeEdges: any, startIndex: any): any;
    }

    /**
     * @class PlaceHolder
     *
     **/
    export class PlaceHolder {
        /**
         * PlaceHolder.cancel()
         *
         * TODO
         *
         **/
        cancel(): void;
        /**
         * PlaceHolder.detach()
         *
         * TODO
         *
         **/
        detach(): void;
        /**
         * PlaceHolder@onCursorChange(e)
         *
         * Emitted when the cursor changes.
         *
         **/
        onCursorChange(event: any): void;
        updateMarkers(): void;
        updateAnchors(delta: any): void;
        /**
         * PlaceHolder@onUpdate(e)
         *
         * Emitted when the place holder updates.
         *
         **/
        onUpdate(delta: any): any;
        /**
         * PlaceHolder.hideOtherMarkers()
         *
         * Hides all over markers in the [[EditSession `EditSession`]] that are not the currently selected one.
         *
         **/
        hideOtherMarkers(): void;
        /**
         * PlaceHolder.showOtherMarkers()
         *
         * TODO
         *
         **/
        showOtherMarkers(): void;
        /**
         * PlaceHolder.setup()
         *
         * TODO
         *
         **/
        setup(): void;
        /**
         * - session (Document): The document to associate with the anchor
         * - length (Number): The starting row position
         * - pos (Number): The starting column position
         * - others (String):
         * - mainClass (String):
         * - othersClass (String):
         *
         * @constructor
         **/
        constructor();
    }

    /**
     * @class Occur
     *
     * Finds all lines matching a search term in the current [[Document
     * `Document`]] and displays them instead of the original `Document`. Keeps
     * track of the mapping between the occur doc and the original doc.
     *
     **/
    export class Occur {
        matchingLines(session: any, options: any): any;
        /**
         * Translates the position from the occur document to the original document
         * or `pos` if not found.
         * @param {EditSession} session The occur session
         * @param {Object} pos The position in the occur session document
         * @return {Object} position
         **/
        occurToOriginalPosition(session: EditSession, pos: Object): Object;
        /**
         * Translates the position from the original document to the occur lines in
         * the document or the beginning if the doc {row: 0, column: 0} if not
         * found.
         * @param {EditSession} session The occur session
         * @param {Object} pos The position in the original document
         * @return {Object} position in occur doc
         **/
        originalToOccurPosition(session: EditSession, pos: Object): { row: number; column: any; };
        displayOriginalContent(editor: any): void;
        displayOccurContent(editor: any, options: any): void;
        highlight(sess: any, regexp: any): void;
        /**
         * Disables occur mode. Resets the [[Sessions `EditSession`]] [[Document
         * `Document`]] back to the original doc. If options.translatePosition is
         * truthy also maps the [[Editors `Editor`]] cursor position accordingly.
         * @param {Editor} editor
         * @param {Object} options options.translatePosition
         * @return {Boolean} Whether occur deactivation was successful
         *
         **/
        exit(editor: Editor, options: Object): boolean;
        /**
         * Enables occur mode. expects that `options.needle` is a search term.
         * This search term is used to filter out all the lines that include it
         * and these are then used as the content of a new [[Document
         * `Document`]]. The current cursor position of editor will be translated
         * so that the cursor is on the matching row/column as it was before.
         * @param {Editor} editor
         * @param {Object} options options.needle should be a String
         * @return {Boolean} Whether occur activation was successful
         *
         **/
        enter(editor: Editor, options: Object): boolean;
        /**
         * Creates a new `Occur` object.
         *
         * @constructor
         **/
        constructor();
    }

    /** MultiSelect(editor)**/
    export class MultiSelect {
    }

    export class MouseHandler {
        destroy(): void;
        cancelContextMenu(): void;
        captureMouse(ev: any, mouseMoveHandler: any): any;
        setState(state: any): void;
        onMouseWheel(name: any, e: any): void;
        onMouseMove(name: any, e: any): void;
        onMouseEvent(name: any, e: any): void;
    }

    /**
     * Custom Ace mouse event
     **/
    export class MouseEvent {
        /**
         * @return {Boolean} whether the shift key was pressed when the event was emitted
         **/
        getShiftKey(): any;
        /**
         * Get the clicked mouse button
         *
         * @return {Number} 0 for left button, 1 for middle button, 2 for right button
         **/
        getButton(): any;
        /**
         * Check if the mouse cursor is inside of the text selection
         *
         * @return {Boolean} whether the mouse cursor is inside of the selection
         **/
        inSelection(): any;
        /**
         * Get the document position below the mouse cursor
         *
         * @return {Object} 'row' and 'column' of the document position
         **/
        getDocumentPosition(): any;
        stop(): void;
        preventDefault(): void;
        stopPropagation(): void;
    }

    export class FoldHandler {
    }

    export class DragdropHandler {
        onMouseDown(e: any): void;
        onMouseDrag(e: any): void;
        startDrag(): void;
        dragReadyEnd(e: any): void;
        dragWaitEnd(): void;
        dragWait(): void;
        onDrop(e: any): any;
        onDragLeave(e: any): any;
        onDragOver(e: any): any;
        onDragEnter(e: any): any;
        onDragEnd(e: any): void;
        onDragStart(e: any): any;
    }

    export class DefaultHandlers {
        onMouseWheel(ev: any): any;
        onQuadClick(ev: any): void;
        onTripleClick(ev: any): void;
        onDoubleClick(ev: any): void;
        focusWait(): void;
        selectAllEnd(): void;
        selectByLinesEnd(): void;
        extendSelectionBy(unitName: any): void;
        select(): void;
        startSelect(pos: any, waitForClickSelection: any): void;
        onMouseDown(ev: any): any;
    }

    export class GutterTooltip {
        setPosition(x: any, y: any): void;
    }

    export class GutterHandler {
    }

    export class VisualforceMode {
    }

    export class SnippetGroupHighlightRules {
    }

    export class SnippetHighlightRules {
    }

    export class RazorCompletions {
        getKeywordCompletions(state: any, session: any, pos: any, prefix: any): any;
        getShortStartCompletions(state: any, session: any, pos: any, prefix: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
    }

    export class PhpCompletions {
        getArrayKeyCompletions(state: any, session: any, pos: any, prefix: any): any;
        getVariableCompletions(state: any, session: any, pos: any, prefix: any): any;
        getFunctionCompletions(state: any, session: any, pos: any, prefix: any): any;
        getTagCompletions(state: any, session: any, pos: any, prefix: any): {};
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
    }

    export class PhpMode {
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
        autoOutdent(state: any, doc: any, row: any): void;
        checkOutdent(state: any, line: any, input: any): any;
        getNextLineIndent(state: any, line: any, tab: any): any;
    }

    export class MatchingParensOutdent {
        $getIndent(line: any): any;
        autoOutdent(doc: any, row: any): number;
        checkOutdent(line: any, input: any): any;
    }

    export class MatchingBraceOutdent {
        $getIndent(line: any): any;
        autoOutdent(doc: any, row: any): number;
        checkOutdent(line: any, input: any): any;
    }

    export class HtmlCompletions {
        getHTMLEntityCompletions(state: any, session: any, pos: any, prefix: any): any;
        getAttributeValueCompletions(state: any, session: any, pos: any, prefix: any): any;
        getAttributeCompletions(state: any, session: any, pos: any, prefix: any): any;
        getTagCompletions(state: any, session: any, pos: any, prefix: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
    }

    export class Tag {
    }

    export class FoldMode {
        _pop(stack: any, tag: any): any;
        _readTagBackward(iterator: any): any;
        /**
         * reads a full tag and places the iterator after the tag
         **/
        _readTagForward(iterator: any): any;
        _findEndTagInLine(session: any, row: any, tagName: any, startColumn: any): boolean;
        /**
         * returns a first tag (or a fragment) in a line
         **/
        _getFirstTagInLine(session: any, row: any): any;
        getCommentFoldWidget(session: any, row: any): "" | "start";
        vbsBlock(session: any, row: any, column: any, tokenRange: any): any;
        /**
         * @returns {Range} folding block for sequence that starts with 'CASE' or 'BEGIN' and ends with 'END'
         * @param {string} matchSequence - the sequence of charaters that started the fold widget, which should remain visible when the fold widget is folded
         */
        getBeginEndBlock(session: any, row: any, column: any, matchSequence: string): Range;
        rubyBlock(session: any, row: any, column: any, tokenRange: any): any;
        $tryMode(state: any, session: any, foldStyle: any, row: any): any;
        $getMode(state: any): any;
        luaBlock(session: any, row: any, column: any, tokenRange: any): any;
        latexSection(session: any, row: any, column: any): any;
        latexBlock(session: any, row: any, column: any, returnRange: any): any;
        /**
         is the row a heading?
         */
        isHeading(session: any, row: any): boolean;
        closingBracketBlock(session: any, bracket: any, row: any, column: any, typeRe: any): any;
        openingBracketBlock(session: any, bracket: any, row: any, column: any, typeRe: any): any;
        indentationBlock(session: any, row: any, column: any): any;
        /**
         * gets comment region block with end region assumed to be start of comment in any cstyle mode or SQL mode (--) which inherits from this.
         * There may optionally be a pound symbol before the region/endregion statement
         */
        getCommentRegionBlock(session: any, line: any, row: any): any;
        getSectionRange(session: any, row: any): any;
        getRegionBlock(session: any, line: any, row: any): any;
        getUsingStatementBlock(session: any, line: any, row: any): any;
        getFoldWidgetRange(session: any, foldStyle: any, row: any): any;
        getFoldWidget(session: any, foldStyle: any, row: any): any;
    }

    export class EjsHighlightRules {
    }

    export class DjangoHtmlHighlightRules {
    }

    export class DjangoHighlightRules {
    }

    export class CssCompletions {
        getPropertyValueCompletions(state: any, session: any, pos: any, prefix: any): any;
        getPropertyCompletions(state: any, session: any, pos: any, prefix: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
        defineCompletions(): void;
    }

    export class Behaviour {
        getBehaviours(filter: any): any;
        inherit(mode: any, filter: any): void;
        remove(name: any): void;
        addBehaviours(behaviours: any): void;
        add(name: any, action: any, callback: any): void;
    }

    export class XQueryBehaviour {
    }

    export class XmlBehaviour {
    }

    export class LiquidBehaviour {
    }

    export class HtmlBehaviour {
    }

    export class CstyleBehaviour {
        clearMaybeInsertedClosing(): void;
        popAutoInsertedClosing(): void;
        isMaybeInsertedClosing(cursor: any, line: any): boolean;
        isAutoInsertedClosing(cursor: any, line: any, bracket: any): boolean;
        recordMaybeInsert(editor: any, session: any, bracket: any): void;
        recordAutoInsert(editor: any, session: any, bracket: any): void;
        $matchTokenType(token: any, types: any): boolean;
        isSaneInsertion(editor: any, session: any): any;
    }

    export class CssBehaviour {
    }

    export class ApexMode {
    }

    export class LineWidgets {
        renderWidgets(e: any, renderer: any): void;
        measureWidgets(e: any, renderer: any): void;
        onWidgetChanged(w: any): void;
        getWidgetsAtRow(row: any): {};
        removeLineWidget(w: any): void;
        addLineWidget(w: any): any;
        $registerLineWidget(w: any): any;
        $updateRows(): void;
        updateOnChange(delta: any): void;
        updateOnFold(e: any, session: any): void;
        detach(e: any): void;
        attach(editor: any): void;
        $onChangeEditor(e: any): void;
        $getWidgetScreenLength(): number;
        getRowLength(row: any): any;
    }

    /**
     * Helper functions and hashes for key handling.
     **/
    export class Keys {
    }

    export class EventListener {
        destroy(): void;
    }

    export class Object {
        values(o: any): any;
        assign(target: any): any;
    }

    export class UnicodeTBL20 {
    }

    export class UnicodeTBL00 {
    }

    export class ArabicAlefBetIntervalsEnd {
    }

    export class ArabicAlefBetIntervalsBegine {
    }

    export class AppConfig {
        setDefaultValues(path: any, optionHash: any): void;
        setDefaultValue(path: any, name: any, value: any): boolean;
        resetOptions(obj: any): void;
        /**
         * option {name, value, initialValue, setterName, set, get }
         **/
        defineOptions(obj: any, path: any, options: any): any;
    }

    export class Text {
        destroy(): void;
        $useLineGroups(): any;
        $getFoldLineTokens(row: any, foldLine: any): {};
        /** row is either first row of foldline or not in fold**/
        $renderLine(parent: any, row: any, foldLine: any): void;
        $renderOverflowMessage(parent: any, screenColumn: any, token: any, value: any, hide: any): void;
        $renderSimpleLine(parent: any, tokens: any): any;
        $renderWrappedLine(parent: any, tokens: any, splits: any): void;
        $createLineElement(parent: any): any;
        renderIndentGuide(parent: any, value: any, max: any): any;
        $renderToken(parent: any, screenColumn: any, token: any, value: any): any;
        update(config: any): void;
        $renderLinesFragment(config: any, firstRow: any, lastRow: any): {};
        scrollLines(config: any): any;
        updateLines(config: any, firstRow: any, lastRow: any): any;
        onChangeTabSize(): void;
        $computeTabString(): void;
        setDisplayIndentGuides(display: any): boolean;
        setShowInvisibles(showInvisibles: any): boolean;
        setSession(session: any): void;
        $pollSizeChanges(): any;
        checkForSizeChanges(): void;
        $setFontMetrics(measure: any): void;
        getCharacterWidth(): any;
        getLineHeight(): any;
        setPadding(padding: any): void;
        $updateEolChar(): boolean;
    }

    export class Marker {
        drawScreenLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawFullLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        /** Draws Bidi marker which covers part or whole width of a single screen line**/
        drawBidiSingleLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraLength: any, extraStyle: any): void;
        /** Draws a marker which covers part or whole width of a single screen line**/
        drawSingleLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraLength: any, extraStyle: any): any;
        /** Draws a multi line marker, where lines span the full width**/
        drawMultiLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        /** Draws a marker, which spans a range of text on multiple lines **/
        drawTextMarker(stringBuilder: any, range: any, clazz: any, layerConfig: any, extraStyle: any): void;
        $getTop(row: any, layerConfig: any): number;
        update(config: any): void;
        elt(className: any, css: any): void;
        setMarkers(markers: any): void;
        setSession(session: any): void;
        setPadding(padding: any): void;
    }

    export class Lines {
        createCell(row: any, config: any, session: any, initElement: any): any;
        $cacheCell(cell: any): void;
        last(): any;
        unshift(cell: any): void;
        push(cell: any): void;
        pop(): void;
        shift(): void;
        get(index: any): any;
        getLength(): any;
        computeLineHeight(row: any, config: any, session: any): number;
        computeLineTop(row: any, config: any, session: any): number;
        pageChanged(oldConfig: any, newConfig: any): boolean;
        moveContainer(config: any): void;
    }

    export class Gutter {
        getRegion(point: any): "markers" | "foldWidgets";
        $computePadding(): any;
        getShowFoldWidgets(): any;
        setShowFoldWidgets(show: any): void;
        getShowLineNumbers(): any;
        setShowLineNumbers(show: any): void;
        setHighlightGutterLine(highlightGutterLine: any): void;
        $renderCell(cell: any, config: any, fold: any, row: any): any;
        $renderLines(config: any, firstRow: any, lastRow: any): {};
        scrollLines(config: any): any;
        updateLineHighlight(): void;
        $updateCursorRow(): void;
        $updateGutterWidth(config: any): void;
        update(config: any): void;
        $updateAnnotations(delta: any): void;
        setAnnotations(annotations: any): void;
        removeGutterDecoration(row: any, className: any): void;
        addGutterDecoration(row: any, className: any): void;
        setSession(session: any): void;
    }

    export class FontMetrics {
        /** general transforms from element coordinates x to screen coordinates u have the form**/
        transformCoordinates(clientPos: any, elPos: any): {};
        $initTransformMeasureNodes(): void;
        $getZoom(element: any): any;
        destroy(): void;
        getCharacterWidth(ch: any): any;
        $measureCharWidth(ch: any): number;
        $measureSizes(node: any): { height: any; width: number; };
        setPolling(val: any): void;
        $pollSizeChanges(): any;
        $addObserver(): void;
        checkForSizeChanges(size: any): void;
        $setMeasureNodeStyles(style: any, isRoot: any): void;
    }

    export class Cursor {
        destroy(): void;
        $setOverwrite(overwrite: any): void;
        update(config: any): void;
        isCursorInView(pixelPos: any, config: any): boolean;
        getPixelPosition(position: any, onScreen: any): { left: any; top: number; };
        restartTimer(): void;
        showCursor(): void;
        hideCursor(): void;
        removeCursor(): any;
        addCursor(): any;
        setSmoothBlinking(smoothBlinking: any): void;
        setBlinkInterval(blinkInterval: any): void;
        setBlinking(blinking: any): void;
        setSession(session: any): void;
        setPadding(padding: any): void;
        $stopCssAnimation(): void;
        $startCssAnimation(): void;
        $updateOpacity(val: any): void;
    }

    export class MultiHashHandler {
    }

    export class HashHandler {
        getStatusText(editor: any, data: any): any;
        handleKeyboard(data: any, hashId: any, keyString: any, keyCode: any): { command: any; };
        findKeyCommand(hashId: any, keyString: any): any;
        /** accepts keys in the form ctrl+Enter or ctrl-Enter**/
        parseKeys(keys: any): false | { key: any; hashId: number; };
        _buildKeyHash(command: any): void;
        bindKeys(keyList: any): void;
        removeCommands(commands: any): void;
        addCommands(commands: any): void;
        _addCommandToBinding(keyId: any, command: any, position: any): void;
        bindKey(key: any, command: any, position: any): any;
        removeCommand(command: any, keepCommand: any): void;
        addCommand(command: any): void;
    }

    /**
     * @class IncrementalSearch
     *
     * Implements immediate searching while the user is typing. When incremental
     * search is activated, keystrokes into the editor will be used for composing
     * a search term. Immediately after every keystroke the search is updated:
     * - so-far-matching characters are highlighted
     * - the cursor is moved to the next match
     *
     **/
    export class IncrementalSearch {
        message(msg: any): void;
        statusMessage(found: any): void;
        convertNeedleToString(): any;
        convertNeedleToRegExp(): any;
        onPaste(text: any): void;
        onMouseDown(evt: any): boolean;
        next(options: any): any;
        removeChar(c: any): any;
        addString(s: any): any;
        highlightAndFindWithNeedle(moveToNext: any, needleUpdateFunc: any): any;
        cancelSearch(reset: any): any;
        highlight(regexp: any): void;
        selectionFix(editor: any): void;
        deactivate(reset: any): void;
        activate(editor: any, backwards: any): void;
        /**
         *
         *
         * Creates a new `IncrementalSearch` object.
         *
         * @constructor
         **/
        constructor();
    }

    export class ISearchKbd {
    }

    export class StatusBar {
        updateStatus(editor: any): void;
    }

    export class SimpleTextLayer {
    }

    export class SearchBox {
        isFocused(): boolean;
        show(value: any, isReplace: any): void;
        hide(): void;
        replaceAll(): void;
        replaceAndFindNext(): void;
        replace(): void;
        findAll(): void;
        findPrev(): void;
        findNext(): void;
        updateCounter(): void;
        find(skipCurrent: any, backwards: any, preventScroll: any): void;
        highlight(re: any): void;
        $syncOptions(preventScroll: any): void;
        setSearchRange(range: any): void;
        $init(): void;
        $initElements(sb: any): void;
        setSession(e: any): void;
        setEditor(editor: any): void;
    }

    export class OptionPanel {
        getOption(option: any): any;
        setOption(option: any, value: any): void;
        renderOption(key: any, option: any): {};
        renderOptionControl(key: any, option: any): any;
        renderOptionGroup(group: any): any;
        render(): void;
        add(config: any): void;
    }

    /** Make life easier, don't do these right now
     var SweaveBackgroundHighlighter = require("mode/sweave_background_highlighter").SweaveBackgroundHighlighter;
     var RCodeModel = require("mode/r_code_model").RCodeModel;
     **/
    export class Mode {
        $createKeywordList(): any;
        getKeywords(append: any): any;
        transformAction(state: any, action: any, editor: any, session: any, param: any): any;
        $delegator(method: any, args: any, defaultHandler: any): any;
        allowAutoInsert(): boolean;
        getLanguageMode(position: any): "R" | "HTML";
        toggleCommentLines(state: any, doc: any, startRow: any, endRow: any): void;
        getMatching(session: any, row: any, column: any, tokenRange: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
        createWorker(session: any): any;
        $calculateIndent(line: any, tab: any): any;
        $toIndent(str: any): any;
        autoOutdent(state: any, doc: any, row: any): void;
        checkOutdent(state: any, line: any, input: any): any;
        getNextLineIndent(state: any, line: any, tab: any): any;
        supportsFile(filename: any): any;
    }

    /**
     * Implementation of {@link IEmmetEditor} interface for Ace
     */
    export class AceEmmetEditor {
    }

    export class ElasticTabstopsLite {
        /** an even more (naive) Python port**/
        $izip(widths: any, tabs: any): {};
        /** the is a (naive) Python port--but works for these purposes**/
        $izip_longest(iterables: any): {};
        $adjustRow(row: any, widths: any): void;
        $tabsForRow(row: any): {};
        $rightmostSelectionInCell(selectionColumns: any, cellRightEdge: any): number;
        $setBlockCellWidthsToMax(cellWidths: any): any;
        $selectionColumnsForRow(row: any): {};
        $cellWidthsForRow(row: any): any;
        $findCellWidthsForBlock(row: any): { cellWidths: {}; firstRow: any; };
        processRows(rows: any): void;
    }

    export class BracketMatch {
        $findClosingBracket(bracket: any, position: any, typeRe: any): { row: any; column: any; };
        $findOpeningBracket(bracket: any, position: any, typeRe: any): { row: any; column: any; };
        /**
         * Returns:
         * * null if there is no any bracket at `pos`;
         * * two Ranges if there is opening and closing brackets;
         * * one Range if there is only one bracket
         *
         * @param {Point} pos
         * @returns {null|Range[]}
         */
        getMatchingBracketRanges(pos: Point): null | Range[];
        getBracketRange(pos: any): any;
        findMatchingBracket(position: any, chr: any): any;
    }

    export class OccurKeyboardHandler {
        uninstallFrom(editor: any): void;
        installIn(editor: any): void;
        handleKeyboard(data: any, hashId: any, key: any, keyCode: any): any;
        attach(editor: any): void;
    }

    export class IncrementalSearchKeyboardHandler {
        handleKeyboard(data: any, hashId: any, key: any, keyCode: any): any;
        detach(editor: any): void;
        attach(editor: any): void;
    }

    /**
     * This object is used to ensure Bi-Directional support (for languages with text flowing from right to left, like Arabic or Hebrew)
     * including correct caret positioning, text selection mouse and keyboard arrows functioning
     * @class BidiHandler
     **/
    export class BidiHandler {
        /**
         * Converts character coordinates on the screen to respective document column number
         * @param {Number} posX character horizontal offset
         *
         * @return {Number} screen column number corresponding to given pixel offset
         **/
        offsetToCol(posX: Number): Number;
        /**
         * Returns 'selections' - array of objects defining set of selection rectangles
         * @param {Number} startCol the start column position
         * @param {Number} endCol the end column position
         *
         * @return {Object[]} Each object contains 'left' and 'width' values defining selection rectangle.
         **/
        getSelections(startCol: Number, endCol: Number): Object[];
        /**
         * Returns offset of character at position defined by column.
         * @param {Number} col the screen column position
         *
         * @return {Number} horizontal pixel offset of given screen column
         **/
        getPosLeft(col: Number): number;
        setRtlDirection(editor: any, isRtlDir: any): void;
        isRtlLine(row: any): any;
        setContentWidth(width: any): void;
        setEolChar(eolChar: any): void;
        setShowInvisibles(showInvisibles: any): void;
        /**
         * Updates array of character widths
         * @param {Object} font metrics
         *
         **/
        updateCharacterWidths(fontMetrics: any): void;
        /**
         * Resets stored info related to current screen row
         **/
        markAsDirty(): void;
        updateBidiMap(): void;
        updateRowLine(docRow: any, splitIndex: any): void;
        getSplitIndex(): number;
        getDocumentRow(): number;
        onChange(delta: any): void;
        /**
         * Returns 'true' if row contains Bidi characters, in such case
         * creates Bidi map to be used in operations related to selection
         * (keyboard arrays, mouse click, select)
         * @param {Number} the screen row to be checked
         * @param {Number} the document row to be checked [optional]
         * @param {Number} the wrapped screen line index [ optional]
         **/
        isBidiRow(screenRow: any, docRow: any, splitIndex: any): any;
        /**
         * Creates a new `BidiHandler` object
         * @param {EditSession} session The session to use
         *
         * @constructor
         **/
        constructor(session: EditSession);
    }

    /**
     * Tokenizes the current [[Document `Document`]] in the background, and caches the tokenized rows for future use.
     *
     * If a certain row is changed, everything below that row is re-tokenized.
     *
     * @class BackgroundTokenizer
     **/
    export class BackgroundTokenizer {
        cleanup(): void;
        $tokenizeRow(row: any): any;
        /**
         * Returns the state of tokenization at the end of a row.
         * @param {Number} row The row to get state at
         * @returns {string}
         **/
        getState(row: Number): string;
        /**
         * Gives list of [[Token]]'s of the row. (tokens are cached)
         * @param {Number} row The row to get tokens at
         * @returns {Token[]}
         **/
        getTokens(row: Number): Token[];
        /**
         * Stops tokenizing.
         **/
        stop(): void;
        $updateOnChange(delta: any): void;
        /**
         * Sets pretty long delay to prevent the tokenizer from interfering with the user
         */
        scheduleStart(): void;
        /**
         * Starts tokenizing at the row indicated.
         * @param {Number} startRow The row to start at
         **/
        start(startRow: Number): void;
        /**
         * Fires whenever the background tokeniziers between a range of rows are going to be updated.
         *
         * @event update
         * @param {Object} e An object containing two properties, `first` and `last`, which indicate the rows of the region being updated.
         *
         **/
        on(name: 'update', callback: (e: Object) => void): void;
        /**
         * Emits the `'update'` event. `firstRow` and `lastRow` are used to define the boundaries of the region to be updated.
         * @param {Number} firstRow The starting row region
         * @param {Number} lastRow The final row region
         **/
        fireUpdateEvent(firstRow: Number, lastRow: Number): void;
        /**
         * Sets a new document to associate with this object.
         * @param {Document} doc The new document to associate with
         **/
        setDocument(doc: Document): void;
        /**
         * Sets a new tokenizer for this object.
         * @param {Tokenizer} tokenizer The new tokenizer to use
         **/
        setTokenizer(tokenizer: Tokenizer): void;
        /**
         * Creates a new `BackgroundTokenizer` object.
         * @param {Tokenizer} tokenizer The tokenizer to use
         * @param {Editor} editor The editor to associate with
         *
         * @constructor
         **/
        constructor(tokenizer: Tokenizer, editor: Editor);
    }

    export class FilteredList {
        filterCompletions(items: any, needle: any): {};
        setFilter(str: any): void;
    }

    export class Autocomplete {
        for(editor: any): any;
        destroy(): void;
        onTooltipClick(e: any): void;
        hideDocTooltip(): void;
        showDocTooltip(item: any): void;
        updateDocTooltip(): any;
        cancelContextMenu(): void;
        updateCompletions(keepPopupPosition: any, options: any): any;
        showPopup(editor: any, options: any): void;
        gatherCompletions(editor: any, callback: any): boolean;
        insertMatch(data: any, options: any): boolean;
        goTo(where: any): void;
        mousewheelListener(e: any): void;
        mousedownListener(e: any): void;
        blurListener(e: any): void;
        changeListener(e: any): void;
        detach(): void;
        openPopup(editor: any, prefix: any, keepPopupPosition: any): void;
        getPopup(): any;
        $init(): any;
    }

    /**
     * This object is used in some places where needed to show popups - like prompt; autocomplete etc.
     * @class
     */
    export class AcePopup {
        /**
         * Creates and renders single line editor in popup window. If `parentNode` param is isset, then attaching it to this element.
         * @param {Element} parentNode
         * @constructor
         */
        constructor(parentNode: Element);
    }

    export type NewLineMode = 'auto' | 'unix' | 'windows';
    /**
     *
     * Defines a floating pointer in the document. Whenever text is inserted or deleted before the cursor, the position of the anchor is updated.
     *
     * @class Anchor
     **/


    export class Anchor implements EventEmitter {
        /**
         * Clips the anchor position to the specified row and column.
         * @param {Number} row The row index to clip the anchor to
         * @param {Number} column The column index to clip the anchor to
         * @returns {Ace.Point}
         *
         **/
        $clipPositionToDocument(row: Number, column: Number): Ace.Point;
        /**
         * Fires whenever the anchor position changes.
         *
         * Both of these objects have a `row` and `column` property corresponding to the position.
         *
         * Events that can trigger this function include [[Anchor.setPosition `setPosition()`]].
         *
         * @event change
         * @param {Object} e
         An object containing information about the anchor position. It has two properties:
         *
         - `old`: An object describing the old Anchor position
         *
         - `value`: An object describing the new Anchor position
         *
         **/
        on(name: 'change', callback: (e: Object) => void): void;
        /**
         * Internal function called when `"change"` event fired.
         * @param {Ace.Delta} delta
         */
        onChange(delta: Ace.Delta): void;
        /**
         * Creates a new `Anchor` and associates it with a document.
         *
         * @param {Document} doc The document to associate with the anchor
         * @param {Number} row The starting row position
         * @param {Number} column The starting column position
         *
         * @constructor
         **/
        constructor(doc: Document, row: Number, column: Number);
        /**
         * Returns an object identifying the `row` and `column` position of the current anchor.
         * @returns {Ace.Point}
         **/

        getPosition(): Position;
        /**
         *
         * Returns the current document.
         * @returns {Document}
         **/

        getDocument(): Document;
        /**
         * Sets the anchor position to the specified row and column. If `noClip` is `true`, the position is not clipped.
         * @param {Number} row The row index to move the anchor to
         * @param {Number} column The column index to move the anchor to
         * @param {Boolean} noClip Identifies if you want the position to be clipped
         *
         **/

        setPosition(row: number, column: number, noClip?: boolean): void;
        /**
         * When called, the `"change"` event listener is removed.
         *
         **/

        detach(): void;
        /**
         * When called, the `"change"` event listener is appended.
         * @param {Document} doc The document to associate with
         *
         **/

        attach(doc: Document): void;

        addEventListener(name: string, callback: Function, capturing?: boolean): void;

        off(name: string, callback: Function): void;

        on(name: string, callback: Function, capturing?: boolean): void;

        once(name: string, callback: Function): void;

        removeDefaultHandler(name: string, callback: Function): void;

        removeEventListener(name: string, callback: Function): void;

        removeListener(name: string, callback: Function): void;

        setDefaultHandler(name: string, callback: Function): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        removeAllListeners(eventName: any): void;
    }
    /**
     * Contains the text of the document. Document can be attached to several [[EditSession `EditSession`]]s.
     * At its core, `Document`s are just an array of strings, with each row in the document matching up to the array index.
     *
     * @class Document
     **/


    export class Document implements EventEmitter {
        $splitAndapplyLargeDelta(delta: any, MAX: any): void;
        $safeApplyDelta(delta: any): void;
        /**
         * Fires whenever the document changes.
         *
         * Several methods trigger different `"change"` events. Below is a list of each action type, followed by each property that's also available:
         *
         *
         * `"insert"`
         *
         * `range`: the [[Range]] of the change within the document
         *
         * `lines`: the lines being added
         *
         * `"remove"`
         *
         * `range`: the [[Range]] of the change within the document
         *
         * `lines`: the lines being removed
         *
         * @event change
         * @param {Object} e Contains at least one property called `"action"`. `"action"` indicates the action that triggered the change. Each action also has a set of additional properties.
         *
         **/
        on(name: 'change', callback: (e: Object) => void): void;
        $clipPosition(position: any): any;
        removeLines(firstRow: any, lastRow: any): any;
        /** Deprecated methods retained for backwards compatibility.**/
        insertLines(row: any, lines: any): any;
        $detectNewLine(text: any): void;
        $split(text: any): any;
        /**
         *
         * Creates a new `Document`. If `text` is included, the `Document` contains those strings; otherwise, it's empty.
         * @param {String | String[]} textOrLines text The starting text
         * @constructor
         **/
        constructor(textOrLines: String | String[]);
        /**
         * Replaces all the lines in the current `Document` with the value of `text`.
         *
         * @param {String} text The text to use
         **/

        setValue(text: string): void;
        /**
         * Returns all the lines in the document as a single string, joined by the new line character.
         **/

        getValue(): string;
        /**
         * Creates a new `Anchor` to define a floating point in the document.
         * @param {Number} row The row number to use
         * @param {Number} column The column number to use
         *
         **/

        createAnchor(row: number, column: number): Anchor;
        /**
         * Returns the newline character that's being used, depending on the value of `newLineMode`.
         * @returns {String} If `newLineMode == windows`, `\r\n` is returned.
         *
         If `newLineMode == unix`, `\n` is returned.
         *
         If `newLineMode == auto`, the value of `autoNewLine` is returned.
         *
         **/

        getNewLineCharacter(): string;
        /**
         * [Sets the new line mode.]{: #Document.setNewLineMode.desc}
         * @param {String} newLineMode [The newline mode to use; can be either `windows`, `unix`, or `auto`]{: #Document.setNewLineMode.param}
         *
         **/

        setNewLineMode(newLineMode: NewLineMode): void;
        /**
         * [Returns the type of newlines being used; either `windows`, `unix`, or `auto`]{: #Document.getNewLineMode}
         * @returns {String}
         **/

        getNewLineMode(): NewLineMode;
        /**
         * Returns `true` if `text` is a newline character (either `\r\n`, `\r`, or `\n`).
         * @param {String} text The text to check
         *
         **/

        isNewLine(text: string): boolean;
        /**
         * Returns a verbatim copy of the given line as it is in the document
         * @param {Number} row The row index to retrieve
         *
         **/

        getLine(row: number): string;
        /**
         * Returns an array of strings of the rows between `firstRow` and `lastRow`. This function is inclusive of `lastRow`.
         * @param {Number} firstRow The first row index to retrieve
         * @param {Number} lastRow The final row index to retrieve
         *
         **/

        getLines(firstRow: number, lastRow: number): string[];
        /**
         * Returns all lines in the document as string array.
         **/

        getAllLines(): string[];
        /**
         * Returns the number of rows in the document.
         **/

        getLength(): number;
        /**
         * Returns all the text within `range` as a single string.
         * @param {Range} range The range to work with.
         *
         * @returns {String}
         **/

        getTextRange(range: Range): string;
        /**
         * Returns all the text within `range` as an array of lines.
         * @param {Range} range The range to work with.
         *
         * @returns {string[]}
         **/

        getLinesForRange(range: Range): string[];
        /**
         * Inserts a block of `text` at the indicated `position`.
         * @param {Object} position The position to start inserting at; it's an object that looks like `{ row: row, column: column}`
         * @param {String} text A chunk of text to insert
         * @returns {Object} The position ({row, column}) of the last line of `text`. If the length of `text` is 0, this function simply returns `position`.
         *
         **/

        insert(position: Position, text: string): Position;
        /**
         * Inserts a block of `text` at the indicated `position`.
         * @param {Object} position The position to start inserting at; it's an object that looks like `{ row: row, column: column}`
         * @param {String} text A chunk of text to insert
         * @returns {Object} The position ({row, column}) of the last line of `text`. If the length of `text` is 0, this function simply returns `position`.
         *
         **/

        insert(position: { row: number, column: number }, text: string): Position;
        /**
         * Inserts `text` into the `position` at the current row. This method also triggers the `"change"` event.
         *
         * This differs from the `insert` method in two ways:
         *
         1. This does NOT handle newline characters (single-line text only).
         *
         2. This is faster than the `insert` method for single-line text insertions.
         *
         * @param {Object} position The position to insert at; it's an object that looks like `{ row: row, column: column}`
         * @param {String} text A chunk of text
         * @returns {Object} Returns an object containing the final row and column, like this:
         *
         ```
         *
         {row: endRow, column: 0}
         *
         ```
         **/

        insertInLine(position: Position, text: string): Position;

        insertNewLine(position: Point): Point;

        clippedPos(row: number, column: number): Point;

        clonePos(pos: Point): Point;

        pos(row: number, column: number): Point;
        /**
         * Inserts the elements in `lines` into the document as full lines (does not merge with existing line), starting at the row index given by `row`. This method also triggers the `"change"` event.
         * @param {Number} row The index of the row to insert at
         * @param {string[]} lines An array of strings
         * @returns {Object} Contains the final row and column, like this:
         *
         ```
         *
         {row: endRow, column: 0}
         *
         ```
         *
         If `lines` is empty, this function returns an object containing the current row, and column, like this:
         *
         ```
         *
         {row: row, column: 0}
         *
         ```
         *
         **/

        insertFullLines(row: number, lines: string[]): void;
        /**
         * Inserts the elements in `lines` into the document, starting at the position index given by `row`. This method also triggers the `"change"` event.
         * @param {Number} row The index of the row to insert at
         * @param {string[]} lines An array of strings
         * @returns {Object} Contains the final row and column, like this:
         *
         ```
         *
         {row: endRow, column: 0}
         *
         ```
         *
         If `lines` is empty, this function returns an object containing the current row, and column, like this:
         *
         ```
         *
         {row: row, column: 0}
         *
         ```
         *
         **/

        insertMergedLines(position: Position, lines: string[]): Point;
        /**
         * Removes the `range` from the document.
         * @param {Range} range A specified Range to remove
         * @returns {Object} Returns the new `start` property of the range, which contains `startRow` and `startColumn`. If `range` is empty, this function returns the unmodified value of `range.start`.
         *
         **/

        remove(range: Range): Position;
        /**
         * Removes the specified columns from the `row`. This method also triggers a `"change"` event.
         * @param {Number} row The row to remove from
         * @param {Number} startColumn The column to start removing at
         * @param {Number} endColumn The column to stop removing at
         * @returns {Object} Returns an object containing `startRow` and `startColumn`, indicating the new row and column values.<br/>If `startColumn` is equal to `endColumn`, this function returns nothing.
         *
         **/

        removeInLine(row: number, startColumn: number, endColumn: number): Position;
        /**
         * Removes a range of full lines. This method also triggers the `"change"` event.
         * @param {Number} firstRow The first row to be removed
         * @param {Number} lastRow The last row to be removed
         * @returns {[String]} Returns all the removed lines.
         *
         **/

        removeFullLines(firstRow: number, lastRow: number): string[];
        /**
         * Removes the new line between `row` and the row immediately following it. This method also triggers the `"change"` event.
         * @param {Number} row The row to check
         *
         **/

        removeNewLine(row: number): void;
        /**
         * Replaces a range in the document with the new `text`.
         * @param {Range} range A specified Range to replace
         * @param {String} text The new text to use as a replacement
         * @returns {Object} Returns an object containing the final row and column, like this:
         *
         {row: endRow, column: 0}
         * If the text and range are empty, this function returns an object containing the current `range.start` value.
         * If the text is the exact same as what currently exists, this function returns an object containing the current `range.end` value.
         *
         **/

        replace(range: Range, text: string): Position;
        /**
         * Applies all changes in `deltas` to the document.
         * @param {Delta[]} deltas An array of delta objects (can include "insert" and "remove" actions)
         **/

        applyDeltas(deltas: Delta[]): void;
        /**
         * Reverts all changes in `deltas` from the document.
         * @param {Delta[]} deltas An array of delta objects (can include "insert" and "remove" actions)
         **/

        revertDeltas(deltas: Delta[]): void;
        /**
         * Applies `delta` to the document.
         * @param {Object} delta A delta object (can include "insert" and "remove" actions)
         **/

        applyDelta(delta: Delta, doNotValidate?: boolean): void;
        /**
         * Reverts `delta` from the document.
         * @param {Object} delta A delta object (can include "insert" and "remove" actions)
         **/

        revertDelta(delta: Delta): void;
        /**
         * Converts an index position in a document to a `{row, column}` object.
         *
         * Index refers to the "absolute position" of a character in the document. For example:
         *
         * ```javascript
         * var x = 0; // 10 characters, plus one for newline
         * var y = -1;
         * ```
         *
         * Here, `y` is an index 15: 11 characters for the first row, and 5 characters until `y` in the second.
         *
         * @param {Number} index An index to convert
         * @param {Number} startRow=0 The row from which to start the conversion
         * @returns {Object} A `{row, column}` object of the `index` position
         */

        indexToPosition(index: number, startRow: number): Position;
        /**
         * Converts the `{row, column}` position in a document to the character's index.
         *
         * Index refers to the "absolute position" of a character in the document. For example:
         *
         * ```javascript
         * var x = 0; // 10 characters, plus one for newline
         * var y = -1;
         * ```
         *
         * Here, `y` is an index 15: 11 characters for the first row, and 5 characters until `y` in the second.
         *
         * @param {Object} pos The `{row, column}` to convert
         * @param {Number} startRow=0 The row from which to start the conversion
         * @returns {Number} The index position in the document
         */

        positionToIndex(pos: Position, startRow?: number): number;

        addEventListener(name: string, callback: Function, capturing?: boolean): void;

        off(name: string, callback: Function): void;

        on(name: string, callback: Function, capturing?: boolean): void;

        once(name: string, callback: Function): void;

        removeDefaultHandler(name: string, callback: Function): void;

        removeEventListener(name: string, callback: Function): void;

        removeListener(name: string, callback: Function): void;

        setDefaultHandler(name: string, callback: Function): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        removeAllListeners(eventName: any): void;
    }
    /**
     * If an array is passed in, the folds are expected to be sorted already.
     **/


    export class FoldLine {
        toString(): any;
        folds: Fold[];
        range: Range;
        start: Point;
        end: Point;
        /**
         * Note: This doesn't update wrapData!
         **/


        shiftRow(shift: number): void;

        addFold(fold: Fold): void;

        containsRow(row: number): boolean;

        walk(callback: Function, endRow?: number, endColumn?: number): void;

        getNextFoldTo(row: number, column: number): null | { fold: Fold, kind: string };

        addRemoveChars(row: number, column: number, len: number): void;

        split(row: number, column: number): FoldLine;

        merge(foldLineNext: FoldLine): void;

        idxToPosition(idx: number): Point;
    }
    /**
     * Simple fold-data struct.
     ***/


    export class Fold {
        toString(): string;
        range: Range;
        start: Point;
        end: Point;
        foldLine?: FoldLine;
        sameRow: boolean;
        subFolds: Fold[];


        setFoldLine(foldLine: FoldLine): void;

        clone(): Fold;

        addSubFold(fold: Fold): Fold;

        restoreRange(range: Range): void;
    }


    interface Folding {
        tokenizerUpdateFoldWidgets(e: any): void;
        $toggleFoldWidget(row: any, options: any): any;
        onFoldWidgetClick(row: any, e: any): void;
        $setFolding(foldMode: any): void;
        foldAllComments(): void;
        foldToLevel(level: any): void;
        $cloneFoldData(): {};
        getRowFoldStart(docRow: any, startFoldRow: any): any;
        getRowFoldEnd(docRow: any, startFoldRow: any): any;
        $addFoldLine(foldLine: any): any;
        /**
         * Looks up a fold at a given row/column. Possible values for side:
         *
         -1: ignore a fold if fold.start = row/column
         *
         +1: ignore a fold if fold.end = row/column
         **/

        getFoldAt(row: number, column: number, side: number): Fold;
        /**
         * Returns all folds in the given range. Note, that this will return folds
         *
         **/

        getFoldsInRange(range: Range): Fold[];

        getFoldsInRangeList(ranges: Range[]): Fold[];
        /**
         * Returns all folds in the document
         **/

        getAllFolds(): Fold[];
        /**
         * Returns the string between folds at the given position.
         * E.g.
         *
         foo<fold>b|ar<fold>wolrd -> "bar"
         *
         foo<fold>bar<fold>wol|rd -> "world"
         *
         foo<fold>bar<fo|ld>wolrd -> <null>
         *
         * where | means the position of row/column
         *
         * The trim option determs if the return string should be trimed according
         * to the "side" passed with the trim value:
         *
         * E.g.
         *
         foo<fold>b|ar<fold>wolrd -trim=-1> "b"
         *
         foo<fold>bar<fold>wol|rd -trim=+1> "rld"
         *
         fo|o<fold>bar<fold>wolrd -trim=00> "foo"
         **/

        getFoldStringAt(row: number,
            column: number,
            trim?: number,
            foldLine?: FoldLine): string | null;

        getFoldLine(docRow: number, startFoldLine?: FoldLine): FoldLine | null;
        /** returns the fold which starts after or contains docRow**/

        getNextFoldLine(docRow: number, startFoldLine?: FoldLine): FoldLine | null;

        getFoldedRowCount(first: number, last: number): number;
        /**
         * Adds a new fold.
         *
         * @returns
         *
         The new created Fold object or an existing fold object in case the
         *
         passed in range fits an existing fold exactly.
         */

        addFold(placeholder: string | Fold, range?: Range): Fold;

        addFolds(folds: Fold[]): void;

        removeFold(fold: Fold): void;

        removeFolds(folds: Fold[]): void;

        expandFold(fold: Fold): void;

        expandFolds(folds: Fold[]): void;

        unfold(location: null | number | Point | Range,
            expandInner?: boolean): Fold[] | undefined;
        /**
         * Checks if a given documentRow is folded. This is true if there are some
         * folded parts such that some parts of the line is still visible.
         ***/

        isRowFolded(docRow: number, startFoldRow?: FoldLine): boolean;
        getFoldRowEnd(docRow: number, startFoldRow?: FoldLine): number;
        getFoldRowStart(docRow: number, startFoldRow?: FoldLine): number;

        getFoldDisplayLine(foldLine: FoldLine,
            endRow: number | null,
            endColumn: number | null,
            startRow: number | null,
            startColumn: number | null): string;

        getDisplayLine(row: number,
            endColumn: number | null,
            startRow: number | null,
            startColumn: number | null): string;

        toggleFold(tryToUnfold?: boolean): void;

        getCommentFoldRange(row: number,
            column: number,
            dir: number): Range | undefined;

        foldAll(startRow?: number, endRow?: number, depth?: number): void;

        setFoldStyle(style: string): void;

        getParentFoldRangeData(row: number, ignoreCurrent?: boolean): {
            range?: Range,
            firstRange: Range
        };

        toggleFoldWidget(toggleParent?: boolean): void;

        updateFoldWidgets(delta: Delta): void;
    }
    /**
     * This object is used in various places to indicate a region within the editor. To better visualize how this works, imagine a rectangle. Each quadrant of the rectangle is analogous to a range, as ranges contain a starting row and starting column, and an ending row, and ending column.
     * @class Range
     **/


    export class Range {
        /**
         * Compares `p1` and `p2` [[Point]]'s, useful for sorting
         * @param {Ace.Point} p1
         * @param {Ace.Point} p2
         * @returns {Number}
         */
        comparePoints(p1: Ace.Point, p2: Ace.Point): number;
        /**
         * Creates and returns a new `Range` based on the `start` [[Point]] and `end` [[Point]] of the given parameters.
         * @param {Point} start A starting point to use
         * @param {Point} end An ending point to use
         * @returns {Range}
         **/
        fromPoints(start: Point, end: Point): Range;
        /**
         * Creates a new `Range` object with the given starting and ending rows and columns.
         * @param {Number} startRow The starting row
         * @param {Number} startColumn The starting column
         * @param {Number} endRow The ending row
         * @param {Number} endColumn The ending column
         * @constructor
         **/
        constructor(startRow: Number, startColumn: Number, endRow: Number, endColumn: Number);
        start: Point;
        end: Point;
        /**
         * Returns `true` if and only if the starting row and column, and ending row and column, are equivalent to those given by `range`.
         * @param {Range} range A range to check against
         * @return {Boolean}
         **/


        isEqual(range: Range): boolean;
        /**
         * Returns a string containing the range's row and column information, given like this:
         * ```
         *
         [start.row/start.column] -> [end.row/end.column]
         * ```
         * @return {String}
         **/

        toString(): string;
        /**
         * Returns `true` if the `row` and `column` provided are within the given range. This can better be expressed as returning `true` if:
         * ```javascript
         *
         this.start.row <= row <= this.end.row &&
         *
         this.start.column <= column <= this.end.column
         * ```
         * @param {Number} row A row to check for
         * @param {Number} column A column to check for
         * @returns {Boolean}
         * @related [[Range.compare]]
         **/

        contains(row: number, column: number): boolean;
        /**
         * Compares `this` range (A) with another range (B).
         * @param {Range} range A range to compare with
         * @related [[Range.compare]]
         * @returns {Number} This method returns one of the following numbers:
         * * `-2`: (B) is in front of (A), and doesn't intersect with (A)
         * * `-1`: (B) begins before (A) but ends inside of (A)
         * * `0`: (B) is completely inside of (A) OR (A) is completely inside of (B)
         * * `+1`: (B) begins inside of (A) but ends outside of (A)
         * * `+2`: (B) is after (A) and doesn't intersect with (A)
         * * `42`: FTW state: (B) ends in (A) but starts outside of (A)
         **/

        compareRange(range: Range): number;
        /**
         * Compares the row and column of `p` with the starting and ending [[Point]]'s of the calling range (by calling [[Range.compare]]).
         * @param {Ace.Point} p A point to compare with
         * @related [[Range.compare]]
         * @returns {Number}
         **/

        comparePoint(p: Point): number;
        /**
         * Checks the start and end [[Point]]'s of `range` and compares them to the calling range. Returns `true` if the `range` is contained within the caller's range.
         * @param {Range} range A range to compare with
         * @returns {Boolean}
         * @related [[Range.comparePoint]]
         **/

        containsRange(range: Range): boolean;
        /**
         * Returns `true` if passed in `range` intersects with the one calling this method.
         * @param {Range} range A range to compare with
         * @returns {Boolean}
         **/

        intersects(range: Range): boolean;
        /**
         * Returns `true` if the caller's ending row is the same as `row`, and if the caller's ending column is the same as `column`.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Boolean}
         **/

        isEnd(row: number, column: number): boolean;
        /**
         * Returns `true` if the caller's starting row is the same as `row`, and if the caller's starting column is the same as `column`.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Boolean}
         **/

        isStart(row: number, column: number): boolean;
        /**
         * Sets the starting row and column for the range.
         * @param {Number|Ace.Point} row A row to set
         * @param {Number} column A column to set
         *
         **/

        setStart(row: number, column: number): void;
        /**
         * Sets the starting row and column for the range.
         * @param {Number|Ace.Point} row A row to set
         * @param {Number} column A column to set
         *
         **/

        setEnd(row: number, column: number): void;
        /**
         * Returns `true` if the `row` and `column` are within the given range.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Boolean}
         * @related [[Range.compare]]
         **/

        inside(row: number, column: number): boolean;
        /**
         * Returns `true` if the `row` and `column` are within the given range's starting [[Point]].
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Boolean}
         * @related [[Range.compare]]
         **/

        insideStart(row: number, column: number): boolean;
        /**
         * Returns `true` if the `row` and `column` are within the given range's ending [[Point]].
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Boolean}
         * @related [[Range.compare]]
         *
         **/

        insideEnd(row: number, column: number): boolean;
        /**
         * Compares the `row` and `column` with the starting and ending [[Point]]'s of the calling range.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Number} This method returns one of the following numbers:
         * * `1` if `row` is greater than the calling range
         * * `-1` if `row` is less then the calling range
         * * `0` otherwise
         *
         * If the starting row of the calling range is equal to `row`, and:
         * * `column` is greater than or equal to the calling range's starting column, this returns `0`
         * * Otherwise, it returns -1
         *
         * If the ending row of the calling range is equal to `row`, and:
         * * `column` is less than or equal to the calling range's ending column, this returns `0`
         * * Otherwise, it returns 1
         **/

        compare(row: number, column: number): number;
        /**
         * Compares the `row` and `column` with the starting and ending [[Point]]'s of the calling range.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Number} This method returns one of the following numbers:
         * * `-1` if calling range's starting column and calling range's starting row are equal `row` and `column`
         * * Otherwise, it returns the value after calling [[Range.compare `compare()`]].
         **/

        compareStart(row: number, column: number): number;
        /**
         * Compares the `row` and `column` with the starting and ending [[Point]]'s of the calling range.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Number} This method returns one of the following numbers:
         * * `1` if calling range's ending column and calling range's ending row are equal `row` and `column`.
         * * Otherwise, it returns the value after calling [[Range.compare `compare()`]].
         */

        compareEnd(row: number, column: number): number;
        /**
         * Compares the `row` and `column` with the start and end [[Point]]'s of the calling range.
         * @param {Number} row A row to compare with
         * @param {Number} column A column to compare with
         * @returns {Number} This method returns one of the following numbers:
         * * `1` if the ending row of the calling range is equal to `row`, and the ending column of the calling range is equal to `column`
         * * `-1` if the starting row of the calling range is equal to `row`, and the starting column of the calling range is equal to `column`
         * * Otherwise, it returns the value after calling [[Range.compare `compare()`]].
         **/

        compareInside(row: number, column: number): number;
        /**
         * Returns the part of the current `Range` that occurs within the boundaries of `firstRow` and `lastRow` as a new `Range` object.
         * @param {Number} firstRow The starting row
         * @param {Number} lastRow The ending row
         * @returns {Range}
         **/

        clipRows(firstRow: number, lastRow: number): Range;
        /**
         * Changes the `row` and `column` for the calling range for both the starting and ending [[Point]]'s.
         * @param {Number} row A new row to extend to
         * @param {Number} column A new column to extend to
         * @returns {Range} The original range with the new row
         **/

        extend(row: number, column: number): Range;
        /**
         * Returns `true` if the calling range is empty (starting [[Point]] == ending [[Point]]).
         * @returns {Boolean}
         **/

        isEmpty(): boolean;
        /**
         * Returns `true` if the range spans across multiple lines.
         * @returns {Boolean}
         **/

        isMultiLine(): boolean;
        /**
         * Returns a duplicate of the calling range.
         * @returns {Range}
         **/

        clone(): Range;
        /**
         * Returns a range containing the starting and ending rows of the original range, but with a column value of `0`.
         * @returns {Range}
         **/

        collapseRows(): Range;
        /**
         * Given the current `Range`, this function converts those starting and ending [[Point]]'s into screen positions, and then returns a new `Range` object.
         * @param {EditSession} session The `EditSession` to retrieve coordinates from
         * @returns {Range}
         **/

        toScreenRange(session: EditSession): Range;
        /**
         * Shift the calling range by `row` and `column` values.
         * @param {Number} row
         * @param {Number} column
         * @experimental
         */

        moveBy(row: number, column: number): void;
    }


    export interface EditSessionOptions {

        wrap: "off" | "free" | "printmargin" | boolean | number;

        wrapMethod: 'code' | 'text' | 'auto';

        indentedSoftWrap: boolean;

        firstLineNumber: number;

        useWorker: boolean;

        useSoftTabs: boolean;

        tabSize: number;

        navigateWithinSoftTabs: boolean;

        foldStyle: 'markbegin' | 'markbeginend' | 'manual';

        overwrite: boolean;

        newLineMode: NewLineMode;

        mode: string;
    }


    export interface VirtualRendererOptions {
        useTextareaForIME: boolean;

        animatedScroll: boolean;

        showInvisibles: boolean;

        showPrintMargin: boolean;

        printMarginColumn: number;

        printMargin: boolean | number;

        showGutter: boolean;

        fadeFoldWidgets: boolean;

        showFoldWidgets: boolean;
        showLineNumbers: boolean;

        displayIndentGuides: boolean;

        highlightGutterLine: boolean;

        hScrollBarAlwaysVisible: boolean;

        vScrollBarAlwaysVisible: boolean;

        fontSize: number;

        fontFamily: string;

        maxLines: number;

        minLines: number;

        scrollPastEnd: boolean;

        fixedWidthGutter: boolean;

        theme: string;

        hasCssTransforms: boolean;

        maxPixelHeight: number;
    }


    export interface MouseHandlerOptions {

        scrollSpeed: number;

        dragDelay: number;

        dragEnabled: boolean;

        focusTimeout: number;

        tooltipFollowsMouse: boolean;
    }


    export interface EditorOptions extends EditSessionOptions,
        MouseHandlerOptions,
        VirtualRendererOptions {
        enableBlockSelect: any;
        enableMultiselect: any;
        useIncrementalSearch: any;
        spellcheck: any;
        rtl: any;
        rtlText: any;
        enableLinking: any;
        enableSnippets: any;
        /**
         * Enable live autocomplete. If the value is an array, it is assumed to be an array of completers
         * and will use them instead of the default completers.
         */
        enableLiveAutocompletion: any;
        enableBasicAutocompletion: any;
        hardWrap: any;
        enableEmmet: any;
        useElasticTabstops: any;
        enableCodeLens: any;
        relativeLineNumbers: any;
        showLineNumbers: boolean;

        selectionStyle: string;

        highlightActiveLine: boolean;

        highlightSelectedWord: boolean;

        readOnly: boolean;

        copyWithEmptySelection: boolean;

        cursorStyle: 'ace' | 'slim' | 'smooth' | 'wide';

        mergeUndoDeltas: true | false | 'always';

        behavioursEnabled: boolean;

        wrapBehavioursEnabled: boolean;

        enableAutoIndent: boolean;

        autoScrollEditorIntoView: boolean;

        keyboardHandler: string;

        placeholder: string;

        value: string;

        session: EditSession;
    }

    export interface SearchOptions {
        needle: string | RegExp;
        preventScroll: boolean;
        backwards: boolean;
        start: Range;
        skipCurrent: boolean;
        range: Range;
        preserveCase: boolean;
        regExp: RegExp;
        wholeWord: boolean;
        caseSensitive: boolean;
        wrap: boolean;
    }


    export interface EventEmitter {

        once(name: string, callback: Function): void;

        setDefaultHandler(name: string, callback: Function): void;

        removeDefaultHandler(name: string, callback: Function): void;

        on(name: string, callback: Function, capturing?: boolean): void;
        addEventListener(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        removeListener(name: string, callback: Function): void;
        removeEventListener(name: string, callback: Function): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        removeAllListeners(eventName: any): void;
    }

    export interface Point {
        row: number;
        column: number;
    }

    export interface Delta {
        action: 'insert' | 'remove';
        start: Point;
        end: Point;
        lines: string[];
    }

    export interface Annotation {
        row?: number;
        column?: number;
        text: string;
        type: string;
    }

    export interface Command {
        name?: string;
        bindKey?: string | { mac?: string, win?: string };
        readOnly?: boolean;
        exec: (editor: Editor, args?: any) => void;
    }

    export type CommandLike = Command | ((editor: Editor) => void);

    export class KeyboardHandler {
        handleKeyboard: Function;
    }

    export class MarkerLike {
        range: Range;
        type: string;
        renderer?: MarkerRenderer;
        clazz: string;
        inFront: boolean;
        id: number;
        update?: (html: string[],
            // TODO maybe define Marker class
            marker: any,
            session: EditSession,
            config: any) => void;
    }

    export type MarkerRenderer = (html: string[],
        range: Range,
        left: number,
        top: number,
        config: any) => void;

    export interface Token {
        type: string;
        value: string;
        index?: number;
        start?: number;
    }

    export interface Completion {
        value: string;
        score: number;
        meta?: string;
        name?: string;
        caption?: string;
    }
    /**
     * This class takes a set of highlighting rules, and creates a tokenizer out of them. For more information, see [the wiki on extending highlighters](https://github.com/ajaxorg/ace/wiki/Creating-or-Extending-an-Edit-Mode#wiki-extendingTheHighlighter).
     * @class Tokenizer
     **/


    export class Tokenizer {
        $arrayTokens(str: any): {};
        $applyToken(str: any): {};
        $setMaxTokenCount(m: any): void;
        /**
         * Constructs a new tokenizer based on the given rules and flags.
         * @param {Object} rules The highlighting rules
         *
         * @constructor
         **/
        constructor(rules: Object);

        removeCapturingGroups(src: string): string;

        createSplitterRegexp(src: string, flag?: string): RegExp;
        /**
         * Returns an object containing two properties: `tokens`, which contains all the tokens; and `state`, the current state.
         * @returns {Object}
         **/

        getLineTokens(line: string, startState: string | string[]): Token[];
    }
    /**
     *
     *
     * This class provides an essay way to treat the document as a stream of tokens, and provides methods to iterate over these tokens.
     * @class TokenIterator
     **/


    class TokenIterator {
        /**
         * Creates a new token iterator object. The inital token index is set to the provided row and column coordinates.
         * @param {EditSession} session The session to associate with
         * @param {Number} initialRow The row to start the tokenizing at
         * @param {Number} initialColumn The column to start the tokenizing at
         *
         * @constructor
         **/
        constructor(session: EditSession, initialRow: Number, initialColumn: Number);
        /**
         *
         * Returns the current tokenized string.
         * @returns {String}
         **/

        getCurrentToken(): Token;
        /**
         *
         * Returns the current column.
         * @returns {Number}
         **/

        getCurrentTokenColumn(): number;
        /**
         *
         * Returns the current row.
         * @returns {Number}
         **/

        getCurrentTokenRow(): number;
        /**
         * Return the current token position.
         * @returns {Position}
         */

        getCurrentTokenPosition(): Point;
        /**
         * Return the current token range.
         * @returns {Range}
         */

        getCurrentTokenRange(): Range;
        /**
         * Tokenizes all the items from the current point to the row prior in the document.
         * @returns {[String]} If the current point is not at the top of the file, this function returns `null`. Otherwise, it returns an array of the tokenized strings.
         **/

        stepBackward(): Token;
        /**
         * Tokenizes all the items from the current point until the next row in the document. If the current point is at the end of the file, this function returns `null`. Otherwise, it returns the tokenized string.
         * @returns {String}
         **/

        stepForward(): Token;
    }

    export class SyntaxMode {
        getTokenizer(): Tokenizer;
        toggleCommentLines(state: any,
            session: EditSession,
            startRow: number,
            endRow: number): void;
        toggleBlockComment(state: any,
            session: EditSession,
            range: Range,
            cursor: Point): void;
        getNextLineIndent(state: any, line: string, tab: string): string;
        checkOutdent(state: any, line: string, input: string): boolean;
        autoOutdent(state: any, doc: Document, row: number): void;
        // TODO implement WorkerClient types
        createWorker(session: EditSession): any;
        createModeDelegates(mapping: { [key: string]: string }): void;
        transformAction(state: string,
            action: string,
            editor: Editor,
            session: EditSession,
            text: string): any;
        getKeywords(append?: boolean): Array<string | RegExp>;
        getCompletions(state: string,
            session: EditSession,
            pos: Point,
            prefix: string): Completion[];
    }

    export class Config {
        get(key: string): any;
        set(key: string, value: any): void;
        all(): { [key: string]: any };
        moduleUrl(name: string, component?: string): string;
        setModuleUrl(name: string, subst: string): string;
        loadModule(moduleName: string | [string, string],
            onLoad?: (module: any) => void): void;
        init(packaged: any): any;
        defineOptions(obj: any, path: string, options: { [key: string]: any }): Config;
        resetOptions(obj: any): void;
        setDefaultValue(path: string, name: string, value: any): void;
        setDefaultValues(path: string, optionHash: { [key: string]: any }): void;
    }

    export interface OptionsProvider {
        setOptions(optList: { [key: string]: any }): void;
        getOptions(optionNames?: string[] | { [key: string]: any }): { [key: string]: any };
        setOption(name: string, value: any): void;
        getOption(name: string): any;
    }
    /**
     * This object maintains the undo stack for an [[EditSession `EditSession`]].
     * @class UndoManager
     **/


    export class UndoManager {
        $prettyPrint(delta: any): any;
        fromJSON(): void;
        toJSON(): void;
        $syncRev(): void;
        getChangedLines(from: any, to: any): void;
        getChangedRanges(from: any, to: any): void;
        /**
         * Resets the current undo state and creates a new `UndoManager`.
         *
         * @constructor
         **/
        constructor();

        addSession(session: EditSession): void;
        /**
         * Provides a means for implementing your own undo manager. `options` has one property, `args`, an [[Array `Array`]], with two elements:
         *
         * - `args[0]` is an array of deltas
         * - `args[1]` is the document to associate with
         *
         * @param {Object} options Contains additional properties
         *
         **/

        add(delta: Delta, allowMerge: boolean, session: EditSession): void;

        addSelection(selection: string, rev?: number): void;

        startNewGroup(): void;

        markIgnored(from: number, to?: number): void;

        getSelection(rev: number, after?: boolean): { value: string, rev: number };

        getRevision(): number;

        getDeltas(from: number, to?: number): Delta[];
        /**
         * [Perform an undo operation on the document, reverting the last change.]{: #UndoManager.undo}
         * @param {Boolean} dontSelect {:dontSelect}
         *
         * @returns {Range} The range of the undo.
         **/

        undo(session: EditSession, dontSelect?: boolean): void;
        /**
         * [Perform a redo operation on the document, reimplementing the last change.]{: #UndoManager.redo}
         * @param {Boolean} dontSelect {:dontSelect}
         *
         **/

        redo(session: EditSession, dontSelect?: boolean): void;
        /**
         * Destroys the stack of undo and redo redo operations.
         **/

        reset(): void;
        /**
         * Returns `true` if there are undo operations left to perform.
         * @returns {Boolean}
         **/

        canUndo(): boolean;
        /**
         * Returns `true` if there are redo operations left to perform.
         * @returns {Boolean}
         **/

        canRedo(): boolean;
        /**
         * Marks the current status clean
         **/

        bookmark(rev?: number): void;
        /**
         * Returns if the current status is clean
         * @returns {Boolean}
         **/

        isAtBookmark(): boolean;
    }

    export interface Position {
        row: number,
        column: number
    }
    /**
     * Stores all the data about [[Editor `Editor`]] state providing easy way to change editors state.
     *
     * `EditSession` can be attached to only one [[Document `Document`]]. Same `Document` can be attached to several `EditSession`s.
     * @class EditSession
     **/


    export class EditSession implements EventEmitter, OptionsProvider {
        getSelectionMarkers(): any;
        /**
         * @private
         *
         */
        $setFontMetrics(fm: any): void;
        /**
         * For the given document row and column, this returns the document position of the last row.
         * @param {Number} docRow
         * @param {Number} docColumn
         *
         **/
        getDocumentLastRowColumnPosition(docRow: Number, docColumn: Number): any;
        /**
         * Returns number of screenrows in a wrapped line.
         * @param {Number} row The row number to check
         *
         * @returns {Number}
         **/
        getRowLength(row: Number): Number;
        /**
         * Calculates the width of the string `str` on the screen while assuming that the string starts at the first column on the screen.
         * @param {String} str The string to calculate the screen width of
         * @param {Number} maxScreenColumn
         * @param {Number} screenColumn
         * @returns {[Number]} Returns an `int[]` array with two elements:<br/>
         * The first position indicates the number of columns for `str` on screen.<br/>
         * The second value contains the position of the document column that this function read until.
         *
         **/
        $getStringScreenWidth(str: String, maxScreenColumn: Number, screenColumn: Number): [Number];
        /**
         * Given a string, returns an array of the display characters, including tabs and spaces.
         * @param {String} str The string to check
         * @param {Number} offset The value to start at
         *
         **/
        $getDisplayTokens(str: String, offset: Number): {};
        $computeWrapSplits(tokens: any, wrapLimit: any, tabSize: any): {};
        $updateWrapData(firstRow: any, lastRow: any): void;
        $updateRowLengthCache(firstRow: any, lastRow: any, b: any): void;
        $updateInternalDataOnChange(delta: any): any;
        $constrainWrapLimit(wrapLimit: any, min: any, max: any): any;
        $clipRangeToDocument(range: any): any;
        $clipPositionToDocument(row: any, column: any): { row: any; column: any; };
        $clipColumnToRow(row: any, column: any): any;
        $clipRowToDocument(row: any): any;
        $moveLines(firstRow: any, lastRow: any, dir: any): number;
        $getUndoSelection(deltas: any, isUndo: any): any;
        $computeWidth(force: any): any;
        $startWorker(): void;
        $stopWorker(): void;
        $onChangeMode(mode: any, $isPlaceholder: any): void;
        /**
         * Reloads all the tokens on the current session. This function calls [[BackgroundTokenizer.start `BackgroundTokenizer.start ()`]] to all the rows; it also emits the `'tokenizerUpdate'` event.
         **/
        onReloadTokenizer(e: any): void;
        /**
         * If `text` contains either the newline (`\n`) or carriage-return ('\r') characters, `$autoNewLine` stores that value.
         * @param {String} text A block of text
         *
         **/
        $detectNewLine(text: String): void;
        $syncInformUndoManager(): void;
        /**
         * Returns the current [[Document `Document`]] as a string.
         * @method toString
         * @returns {String}
         * @alias EditSession.getValue
         *
         **/
        /**
        * Returns the current [[Document `Document`]] as a string.
        * @method getValue
        * @returns {String}
        * @alias EditSession.toString
        **/
        toString(): String;
        onChange(delta: any): void;
        onChangeFold(e: any): void;
        $getRowCacheIndex(cacheArray: any, val: any): number;
        /**
         * @param {Number} row The row to work with
         *
         **/
        $resetRowCache(docRow: any): void;
        /**
         * Emitted when the wrapping limit changes.
         *
         * @event changeWrapLimit
         *
         **/
        on(name: 'changeWrapLimit'): void;
        /**
         * Emitted when the wrap mode changes.
         *
         * @event changeWrapMode
         *
         **/
        on(name: 'changeWrapMode'): void;
        /**
         * Emitted when the current mode changes.
         *
         * @event changeMode
         *
         **/
        on(name: 'changeMode'): void;
        /**
         * Emitted when an annotation changes, like through [[EditSession.setAnnotations]].
         *
         * @event changeAnnotation
         **/
        on(name: 'changeAnnotation'): void;
        /**
         * Emitted when a back marker changes.
         *
         * @event changeBackMarker
         **/
        on(name: 'changeBackMarker'): void;
        /**
         * Emitted when a front marker changes.
         *
         * @event changeFrontMarker
         **/
        on(name: 'changeFrontMarker'): void;
        /**
         * Emitted when the gutter changes, either by setting or removing breakpoints, or when the gutter decorations change.
         *
         * @event changeBreakpoint
         **/
        on(name: 'changeBreakpoint'): void;
        /**
         * Emitted when the ability to overwrite text changes, via [[EditSession.setOverwrite]].
         *
         * @event changeOverwrite
         **/
        on(name: 'changeOverwrite'): void;
        /**
         * Emitted when the tab size changes, via [[EditSession.setTabSize]].
         *
         * @event changeTabSize
         **/
        on(name: 'changeTabSize'): void;
        /**
         * Sets up a new `EditSession` and associates it with the given `Document` and `Mode`.
         * @param {Document | String} text [If `text` is a `Document`, it associates the `EditSession` with it. Otherwise, a new `Document` is created, with the initial text]{: #textParam}
         * @param {Mode} mode [The initial language mode to use for the document]{: #modeParam}
         *
         * @constructor
         **/
        constructor(text: Document | String, mode: Mode);
        selection: Selection;
        /**
         * Emitted when a code fold is added or removed.
         *
         * @event changeFold
         *
         **/


        // TODO: define BackgroundTokenizer

        on(name: 'changeFold',
            callback: (obj: { data: Fold, action: string }) => void): Function;
        /**
         * Emitted when the scroll left changes.
         * @event changeScrollLeft
         *
         * @param {Number} scrollLeft The new scroll left value
         **/


        on(name: 'changeScrollLeft', callback: (scrollLeft: number) => void): Function;
        /**
         * Emitted when the scroll top changes.
         * @event changeScrollTop
         *
         * @param {Number} scrollTop The new scroll top value
         **/


        on(name: 'changeScrollTop', callback: (scrollTop: number) => void): Function;
        /**
         * Emitted when a background tokenizer asynchronously processes new rows.
         * @event tokenizerUpdate
         *
         * @param {Object} e An object containing one property, `"data"`, that contains information about the changing rows
         *
         **/


        on(name: 'tokenizerUpdate',
            callback: (obj: { data: { first: number, last: number } }) => void): Function;
        /**
         *
         * Emitted when the document changes.
         * @event change
         * @param {Object} e An object containing a `delta` of information about the change.
         **/


        on(name: 'change', callback: () => void): Function;


        setOption<T extends keyof EditSessionOptions>(name: T, value: EditSessionOptions[T]): void;
        getOption<T extends keyof EditSessionOptions>(name: T): EditSessionOptions[T];

        readonly doc: Document;
        /**
         * Sets the `EditSession` to point to a new `Document`. If a `BackgroundTokenizer` exists, it also points to `doc`.
         *
         * @param {Document} doc The new `Document` to use
         *
         **/


        setDocument(doc: Document): void;
        /**
         * Returns the `Document` associated with this session.
         * @return {Document}
         **/

        getDocument(): Document;

        resetCaches(): void;
        /**
         * Sets the session text.
         * @param {String} text The new text to place
         *
         **/

        setValue(text: string): void;
        /**
         * Returns the current [[Document `Document`]] as a string.
         * @method toString
         * @returns {String}
         * @alias EditSession.getValue
         *
         **/
        /**
        * Returns the current [[Document `Document`]] as a string.
        * @method getValue
        * @returns {String}
        * @alias EditSession.toString
        **/

        getValue(): string;
        /**
         * Returns selection object.
         **/

        getSelection(): Selection;
        /**
         * {:BackgroundTokenizer.getState}
         * @param {Number} row The row to start at
         *
         * @related BackgroundTokenizer.getState
         **/

        getState(row: number): string;
        /**
         * Starts tokenizing at the row indicated. Returns a list of objects of the tokenized rows.
         * @param {Number} row The row to start at
         *
         *
         *
         **/

        getTokens(row: number): Token[];
        /**
         * Returns an object indicating the token at the current row. The object has two properties: `index` and `start`.
         * @param {Number} row The row number to retrieve from
         * @param {Number} column The column number to retrieve from
         *
         *
         **/

        getTokenAt(row: number, column: number): Token | null;
        /**
         * Sets the undo manager.
         * @param {UndoManager} undoManager The new undo manager
         *
         *
         **/

        setUndoManager(undoManager: UndoManager): void;
        /**
         * starts a new group in undo history
         **/

        markUndoGroup(): void;
        /**
         * Returns the current undo manager.
         **/

        getUndoManager(): UndoManager;
        /**
         * Returns the current value for tabs. If the user is using soft tabs, this will be a series of spaces (defined by [[EditSession.getTabSize `getTabSize()`]]); otherwise it's simply `'\t'`.
         **/

        getTabString(): string;
        /**
         * Pass `true` to enable the use of soft tabs. Soft tabs means you're using spaces instead of the tab character (`'\t'`).
         * @param {Boolean} useSoftTabs Value indicating whether or not to use soft tabs
         **/

        setUseSoftTabs(val: boolean): void;
        /**
         * Returns `true` if soft tabs are being used, `false` otherwise.
         * @returns {Boolean}
         **/

        getUseSoftTabs(): boolean;
        /**
         * Set the number of spaces that define a soft tab; for example, passing in `4` transforms the soft tabs to be equivalent to four spaces. This function also emits the `changeTabSize` event.
         * @param {Number} tabSize The new tab size
         **/

        setTabSize(tabSize: number): void;
        /**
         * Returns the current tab size.
         **/

        getTabSize(): number;
        /**
         * Returns `true` if the character at the position is a soft tab.
         * @param {Object} position The position to check
         *
         **/

        isTabStop(position: Position): boolean;
        /**
         * Set whether keyboard navigation of soft tabs moves the cursor within the soft tab, rather than over
         * @param {Boolean} navigateWithinSoftTabs Value indicating whether or not to navigate within soft tabs
         **/

        setNavigateWithinSoftTabs(navigateWithinSoftTabs: boolean): void;
        /**
         * Returns `true` if keyboard navigation moves the cursor within soft tabs, `false` if it moves the cursor over soft tabs.
         * @returns {Boolean}
         **/

        getNavigateWithinSoftTabs(): boolean;
        /**
         * Pass in `true` to enable overwrites in your session, or `false` to disable.
         *
         * If overwrites is enabled, any text you enter will type over any text after it. If the value of `overwrite` changes, this function also emits the `changeOverwrite` event.
         *
         * @param {Boolean} overwrite Defines whether or not to set overwrites
         *
         *
         **/

        setOverwrite(overwrite: boolean): void;
        /**
         * Returns `true` if overwrites are enabled; `false` otherwise.
         **/

        getOverwrite(): boolean;
        /**
         * Sets the value of overwrite to the opposite of whatever it currently is.
         **/

        toggleOverwrite(): void;
        /**
         * Adds `className` to the `row`, to be used for CSS stylings and whatnot.
         * @param {Number} row The row number
         * @param {String} className The class to add
         *
         **/

        addGutterDecoration(row: number, className: string): void;
        /**
         * Removes `className` from the `row`.
         * @param {Number} row The row number
         * @param {String} className The class to add
         *
         **/

        removeGutterDecoration(row: number, className: string): void;
        /**
         * Returns an array of strings, indicating the breakpoint class (if any) applied to each row.
         * @returns {[String]}
         **/

        getBreakpoints(): string[];
        /**
         * Sets a breakpoint on every row number given by `rows`. This function also emites the `'changeBreakpoint'` event.
         * @param {Array} rows An array of row indices
         *
         **/

        setBreakpoints(rows: number[]): void;
        /**
         * Removes all breakpoints on the rows. This function also emits the `'changeBreakpoint'` event.
         **/

        clearBreakpoints(): void;
        /**
         * Sets a breakpoint on the row number given by `row`. This function also emits the `'changeBreakpoint'` event.
         * @param {Number} row A row index
         * @param {String} className Class of the breakpoint
         *
         **/

        setBreakpoint(row: number, className: string): void;
        /**
         * Removes a breakpoint on the row number given by `row`. This function also emits the `'changeBreakpoint'` event.
         * @param {Number} row A row index
         *
         **/

        clearBreakpoint(row: number): void;
        /**
         * Adds a new marker to the given `Range`. If `inFront` is `true`, a front marker is defined, and the `'changeFrontMarker'` event fires; otherwise, the `'changeBackMarker'` event fires.
         * @param {Range} range Define the range of the marker
         * @param {String} clazz Set the CSS class for the marker
         * @param {Function | String} type Identify the type of the marker
         * @param {Boolean} inFront Set to `true` to establish a front marker
         *
         * @return {Number} The new marker id
         **/

        addMarker(range: Range,
            className: string,
            type: "fullLine" | "screenLine" | "text" | MarkerRenderer,
            inFront?: boolean): number;
        /**
         * Adds a dynamic marker to the session.
         * @param {Object} marker object with update method
         * @param {Boolean} inFront Set to `true` to establish a front marker
         *
         * @return {Object} The added marker
         **/

        addDynamicMarker(marker: MarkerLike, inFront: boolean): MarkerLike;
        /**
         * Removes the marker with the specified ID. If this marker was in front, the `'changeFrontMarker'` event is emitted. If the marker was in the back, the `'changeBackMarker'` event is emitted.
         * @param {Number} markerId A number representing a marker
         *
         **/

        removeMarker(markerId: number): void;
        /**
         * Returns an object containing all of the markers, either front or back.
         * @param {Boolean} inFront If `true`, indicates you only want front markers; `false` indicates only back markers
         *
         * @returns {Object}
         **/

        getMarkers(inFront?: boolean): MarkerLike[];

        highlight(re: RegExp): void;
        /** experimental**/

        highlightLines(startRow: number,
            endRow: number,
            className: string,
            inFront?: boolean): Range;
        /**
         * Sets annotations for the `EditSession`. This functions emits the `'changeAnnotation'` event.
         * @param {Annotation[]} annotations A list of annotations
         *
         **/
        /**
        * Error:
        *
        {
        *
        row: 12,
        *
        column: 2, //can be undefined
        *
        text: "Missing argument",
        *
        type: "error" // or "warning" or "info"
        *
        }
        **/

        setAnnotations(annotations: Annotation[]): void;
        /**
         * Returns the annotations for the `EditSession`.
         * @returns {Annotation[]}
         **/

        getAnnotations(): Annotation[];
        /**
         * Clears all the annotations for this session. This function also triggers the `'changeAnnotation'` event.
         **/

        clearAnnotations(): void;
        /**
         * Given a starting row and column, this method returns the `Range` of the first word boundary it finds.
         * @param {Number} row The row to start at
         * @param {Number} column The column to start at
         *
         * @returns {Range}
         **/

        getWordRange(row: number, column: number): Range;
        /**
         * Gets the range of a word, including its right whitespace.
         * @param {Number} row The row number to start from
         * @param {Number} column The column number to start from
         *
         * @return {Range}
         **/

        getAWordRange(row: number, column: number): Range;
        /**
         * {:Document.setNewLineMode.desc}
         * @param {String} newLineMode {:Document.setNewLineMode.param}
         *
         *
         * @related Document.setNewLineMode
         **/

        setNewLineMode(newLineMode: NewLineMode): void;
        /**
         *
         * Returns the current new line mode.
         * @returns {String}
         * @related Document.getNewLineMode
         **/

        getNewLineMode(): NewLineMode;
        /**
         * Identifies if you want to use a worker for the `EditSession`.
         * @param {Boolean} useWorker Set to `true` to use a worker
         *
         **/

        setUseWorker(useWorker: boolean): void;
        /**
         * Returns `true` if workers are being used.
         **/

        getUseWorker(): boolean;

        setMode(mode: string | SyntaxMode, callback?: () => void): void;
        /**
         * Returns the current text mode.
         * @returns {TextMode} The current text mode
         **/

        getMode(): SyntaxMode;
        /**
         * This function sets the scroll top value. It also emits the `'changeScrollTop'` event.
         * @param {Number} scrollTop The new scroll top value
         *
         **/

        setScrollTop(scrollTop: number): void;
        /**
         * [Returns the value of the distance between the top of the editor and the topmost part of the visible content.]{: #EditSession.getScrollTop}
         * @returns {Number}
         **/

        getScrollTop(): number;
        /**
         * [Sets the value of the distance between the left of the editor and the leftmost part of the visible content.]{: #EditSession.setScrollLeft}
         **/

        setScrollLeft(scrollLeft: number): void;
        /**
         * [Returns the value of the distance between the left of the editor and the leftmost part of the visible content.]{: #EditSession.getScrollLeft}
         * @returns {Number}
         **/

        getScrollLeft(): number;
        /**
         * Returns the width of the screen.
         * @returns {Number}
         **/

        getScreenWidth(): number;

        getLineWidgetMaxWidth(): number;
        /**
         * Returns a verbatim copy of the given line as it is in the document
         * @param {Number} row The row to retrieve from
         *
         * @returns {String}
         **/

        getLine(row: number): string;
        /**
         * Returns an array of strings of the rows between `firstRow` and `lastRow`. This function is inclusive of `lastRow`.
         * @param {Number} firstRow The first row index to retrieve
         * @param {Number} lastRow The final row index to retrieve
         *
         * @returns {[String]}
         *
         **/

        getLines(firstRow: number, lastRow: number): string[];
        /**
         * Returns the number of rows in the document.
         * @returns {Number}
         **/

        getLength(): number;
        /**
         * {:Document.getTextRange.desc}
         * @param {Range} range The range to work with
         *
         * @returns {String}
         **/

        getTextRange(range: Range): string;
        /**
         * Inserts a block of `text` and the indicated `position`.
         * @param {Object} position The position {row, column} to start inserting at
         * @param {String} text A chunk of text to insert
         * @returns {Object} The position of the last line of `text`. If the length of `text` is 0, this function simply returns `position`.
         *
         *
         **/

        insert(position: Position, text: string): void;
        /**
         * Removes the `range` from the document.
         * @param {Range} range A specified Range to remove
         * @returns {Object} The new `start` property of the range, which contains `startRow` and `startColumn`. If `range` is empty, this function returns the unmodified value of `range.start`.
         *
         * @related Document.remove
         *
         **/

        remove(range: Range): void;
        /**
         * Removes a range of full lines. This method also triggers the `'change'` event.
         * @param {Number} firstRow The first row to be removed
         * @param {Number} lastRow The last row to be removed
         * @returns {[String]} Returns all the removed lines.
         *
         * @related Document.removeFullLines
         *
         **/

        removeFullLines(firstRow: number, lastRow: number): void;
        /**
         * Reverts previous changes to your document.
         * @param {Delta[]} deltas An array of previous changes
         * @param {Boolean} dontSelect [If `true`, doesn't select the range of where the change occured]{: #dontSelect}
         *
         * @returns {Range}
         **/

        undoChanges(deltas: Delta[], dontSelect?: boolean): void;
        /**
         * Re-implements a previously undone change to your document.
         * @param {Delta[]} deltas An array of previous changes
         * @param {Boolean} dontSelect {:dontSelect}
         *
         * @returns {Range}
         **/

        redoChanges(deltas: Delta[], dontSelect?: boolean): void;
        /**
         * Enables or disables highlighting of the range where an undo occurred.
         * @param {Boolean} enable If `true`, selects the range of the reinserted change
         *
         **/

        setUndoSelect(enable: boolean): void;
        /**
         * Replaces a range in the document with the new `text`.
         *
         * @param {Range} range A specified Range to replace
         * @param {String} text The new text to use as a replacement
         * @returns {Object} An object containing the final row and column, like this:
         * ```
         * {row: endRow, column: 0}
         * ```
         * If the text and range are empty, this function returns an object containing the current `range.start` value.
         * If the text is the exact same as what currently exists, this function returns an object containing the current `range.end` value.
         *
         * @related Document.replace
         **/

        replace(range: Range, text: string): void;
        /**
         * Moves a range of text from the given range to the given position. `toPosition` is an object that looks like this:
         *
         ```json
         *
         { row: newRowLocation, column: newColumnLocation }
         *
         ```
         * @param {Range} fromRange The range of text you want moved within the document
         * @param {Object} toPosition The location (row and column) where you want to move the text to
         * @returns {Range} The new range where the text was moved to.
         **/

        moveText(fromRange: Range, toPosition: Position, copy?: boolean): void;
        /**
         * Indents all the rows, from `startRow` to `endRow` (inclusive), by prefixing each row with the token in `indentString`.
         *
         * If `indentString` contains the `'\t'` character, it's replaced by whatever is defined by [[EditSession.getTabString `getTabString()`]].
         * @param {Number} startRow Starting row
         * @param {Number} endRow Ending row
         * @param {String} indentString The indent token
         *
         *
         **/

        indentRows(startRow: number, endRow: number, indentString: string): void;
        /**
         * Outdents all the rows defined by the `start` and `end` properties of `range`.
         * @param {Range} range A range of rows
         *
         **/

        outdentRows(range: Range): void;
        /**
         * Shifts all the lines in the document up one, starting from `firstRow` and ending at `lastRow`.
         * @param {Number} firstRow The starting row to move up
         * @param {Number} lastRow The final row to move up
         * @returns {Number} If `firstRow` is less-than or equal to 0, this function returns 0. Otherwise, on success, it returns -1.
         *
         **/

        moveLinesUp(firstRow: number, lastRow: number): void;
        /**
         * Shifts all the lines in the document down one, starting from `firstRow` and ending at `lastRow`.
         * @param {Number} firstRow The starting row to move down
         * @param {Number} lastRow The final row to move down
         * @returns {Number} If `firstRow` is less-than or equal to 0, this function returns 0. Otherwise, on success, it returns -1.
         **/

        moveLinesDown(firstRow: number, lastRow: number): void;
        /**
         * Duplicates all the text between `firstRow` and `lastRow`.
         * @param {Number} firstRow The starting row to duplicate
         * @param {Number} lastRow The final row to duplicate
         * @returns {Number} Returns the number of new rows added; in other words, `lastRow - firstRow + 1`.
         *
         *
         **/

        duplicateLines(firstRow: number, lastRow: number): void;
        /**
         * Sets whether or not line wrapping is enabled. If `useWrapMode` is different than the current value, the `'changeWrapMode'` event is emitted.
         * @param {Boolean} useWrapMode Enable (or disable) wrap mode
         *
         **/

        setUseWrapMode(useWrapMode: boolean): void;
        /**
         * Returns `true` if wrap mode is being used; `false` otherwise.
         * @returns {Boolean}
         **/

        getUseWrapMode(): boolean;
        /**
         * Sets the boundaries of wrap. Either value can be `null` to have an unconstrained wrap, or, they can be the same number to pin the limit. If the wrap limits for `min` or `max` are different, this method also emits the `'changeWrapMode'` event.
         * @param {Number} min The minimum wrap value (the left side wrap)
         * @param {Number} max The maximum wrap value (the right side wrap)
         *
         **/
        /** Allow the wrap limit to move freely between min and max. Either**/

        setWrapLimitRange(min: number, max: number): void;
        /**
         * This should generally only be called by the renderer when a resize is detected.
         * @param {Number} desiredLimit The new wrap limit
         * @returns {Boolean}
         *
         * @private
         **/

        adjustWrapLimit(desiredLimit: number): boolean;
        /**
         * Returns the value of wrap limit.
         * @returns {Number} The wrap limit.
         **/

        getWrapLimit(): number;
        /**
         * Sets the line length for soft wrap in the editor. Lines will break
         *
         at a minimum of the given length minus 20 chars and at a maximum
         *
         of the given number of chars.
         * @param {number} limit The maximum line length in chars, for soft wrapping lines.
         */

        setWrapLimit(limit: number): void;
        /**
         * Returns an object that defines the minimum and maximum of the wrap limit; it looks something like this:
         *
         *
         { min: wrapLimitRange_min, max: wrapLimitRange_max }
         *
         * @returns {Object}
         **/

        getWrapLimitRange(): { min: number, max: number };

        getRowLineCount(row: number): number;

        getRowWrapIndent(screenRow: number): number;
        /**
         * Returns the position (on screen) for the last character in the provided screen row.
         * @param {Number} screenRow The screen row to check
         * @returns {Number}
         *
         * @related EditSession.documentToScreenColumn
         **/

        getScreenLastRowColumn(screenRow: number): number;
        /**
         * For the given document row and column, this returns the column position of the last screen row.
         * @param {Number} docRow
         *
         * @param {Number} docColumn
         **/

        getDocumentLastRowColumn(docRow: number, docColumn: number): number;
        getdocumentLastRowColumnPosition(docRow: number, docColumn: number): Position;
        /**
         * For the given row, this returns the split data.
         * @returns {String}
         **/

        getRowSplitData(row: number): string | undefined;
        /**
         * The distance to the next tab stop at the specified screen column.
         * @param {Number} screenColumn The screen column to check
         *
         * @returns {Number}
         **/

        getScreenTabSize(screenColumn: number): number;

        screenToDocumentRow(screenRow: number, screenColumn: number): number;

        screenToDocumentColumn(screenRow: number, screenColumn: number): number;
        /**
         * Converts characters coordinates on the screen to characters coordinates within the document. [This takes into account code folding, word wrap, tab size, and any other visual modifications.]{: #conversionConsiderations}
         * @param {Number} screenRow The screen row to check
         * @param {Number} screenColumn The screen column to check
         * @param {Number} offsetX screen character x-offset [optional]
         *
         * @returns {Object} The object returned has two properties: `row` and `column`.
         *
         * @related EditSession.documentToScreenPosition
         **/

        screenToDocumentPosition(screenRow: number,
            screenColumn: number,
            offsetX?: number): Position;
        /**
         * Converts document coordinates to screen coordinates. {:conversionConsiderations}
         * @param {Number} docRow The document row to check
         * @param {Number} docColumn The document column to check
         * @returns {Object} The object returned by this method has two properties: `row` and `column`.
         *
         * @related EditSession.screenToDocumentPosition
         **/

        documentToScreenPosition(docRow: number, docColumn: number): Position;
        /**
         * Converts document coordinates to screen coordinates. {:conversionConsiderations}
         * @param {Number} docRow The document row to check
         * @param {Number} docColumn The document column to check
         * @returns {Object} The object returned by this method has two properties: `row` and `column`.
         *
         * @related EditSession.screenToDocumentPosition
         **/

        documentToScreenPosition(position: Position): Position;
        /**
         * For the given document row and column, returns the screen column.
         * @param {Number} row
         * @param {Number} docColumn
         * @returns {Number}
         *
         **/

        documentToScreenColumn(row: number, docColumn: number): number;
        /**
         * For the given document row and column, returns the screen row.
         * @param {Number} docRow
         * @param {Number} docColumn
         *
         **/

        documentToScreenRow(docRow: number, docColumn: number): number;
        /**
         * Returns the length of the screen.
         * @returns {Number}
         **/

        getScreenLength(): number;

        destroy(): void;

        addEventListener(name: string, callback: Function, capturing?: boolean): void;

        getOptions(optionNames?: string[] | { [p: string]: any }): { [p: string]: any };

        off(name: string, callback: Function): void;

        once(name: string, callback: Function): void;

        removeDefaultHandler(name: string, callback: Function): void;

        removeEventListener(name: string, callback: Function): void;

        removeListener(name: string, callback: Function): void;

        setDefaultHandler(name: string, callback: Function): void;

        setOptions(optList: { [p: string]: any }): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        removeAllListeners(eventName: any): void;
    }


    export class KeyBinding {
        $callKeyboardHandlers(hashId: any, keyString: any, keyCode: any, e: any): boolean;

        setDefaultHandler(handler: KeyboardHandler): void;

        setKeyboardHandler(handler: KeyboardHandler): void;

        addKeyboardHandler(handler: KeyboardHandler, pos?: number): void;

        removeKeyboardHandler(handler: KeyboardHandler): boolean;

        getKeyboardHandler(): KeyboardHandler;

        getStatusText(): string;

        onCommandKey(e: any, hashId: number, keyCode: number): boolean;

        onTextInput(text: string): boolean;
    }

    interface CommandMap {
        [name: string]: Command;
    }

    type execEventHandler = (obj: {
        editor: Editor,
        command: Command,
        args: any[]
    }) => void;
    /**
     * @class CommandManager
     *
     **/
    /**
    * new CommandManager(platform, commands)
    * @param {String} platform Identifier for the platform; must be either `"mac"` or `"win"`
    * @param {Array} commands A list of commands
    *
    **/


    export interface CommandManager extends EventEmitter {
        setupIncrementalSearch(editor: any, val: any): void;
        trimMacro(m: any): any;
        byName: CommandMap,
        commands: CommandMap,
        on(name: 'exec', callback: execEventHandler): Function;

        on(name: 'afterExec', callback: execEventHandler): Function;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;

        on(name: string, callback: Function, capturing?: boolean): void;
        addEventListener(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        removeListener(name: string, callback: Function): void;
        removeEventListener(name: string, callback: Function): void;


        exec(command: string, editor: Editor, args: any): boolean;

        toggleRecording(editor: Editor): void;

        replay(editor: Editor): void;
        addCommand(command: Command): void;
        addCommands(command: Command[]): void;
        removeCommand(command: Command | string, keepCommand?: boolean): void;
        removeCommands(command: Command[]): void;
        bindKey(key: string | { mac?: string, win?: string },
            command: CommandLike,
            position?: number): void;
        bindKeys(keys: { [s: string]: Function }): void;
        parseKeys(keyPart: string): { key: string, hashId: number };
        findKeyCommand(hashId: number, keyString: string): string | undefined;
        handleKeyboard(data: {}, hashId: number, keyString: string, keyCode: string | number): void | { command: string };
        getStatusText(editor: Editor, data: {}): string;
    }
    /**
     * The class that is responsible for drawing everything you see on the screen!
     * @related editor.renderer
     * @class VirtualRenderer
     **/


    export class VirtualRenderer implements OptionsProvider, EventEmitter {
        removeExtraToken(row: any, column: any): void;
        addToken(text: any, type: any, row: any, column: any): void;
        screenToTextCoordinates(x: any, y: any): any;
        $calcSteps(fromValue: any, toValue: any): {};
        /**
         * Deprecated; (moved to [[EditSession]])
         * @deprecated
         **/
        removeGutterDecoration(row: any, className: any): void;
        /**
         *
         * Deprecated; (moved to [[EditSession]])
         * @deprecated
         **/
        addGutterDecoration(row: any, className: any): void;
        $getLongestLine(): any;
        $updateLines(): boolean;
        $computeLayerConfig(): number;
        $autosize(): void;
        $renderChanges(changes: any, force: any): any;
        $updateScrollBarH(): void;
        $updateScrollBarV(): void;
        setMargin(top: any, bottom: any, left: any, right: any): void;
        /** move text input over the cursor**/
        $moveTextAreaToCursor(): void;
        $updatePrintMargin(): void;
        onGutterResize(width: any): void;
        $updateCachedSize(force: any, gutterWidth: any, width: any, height: any): number;
        /**
         * [Triggers a resize of the editor.]{: #VirtualRenderer.onResize}
         * @param {Boolean} force If `true`, recomputes the size, even if the height and width haven't changed
         * @param {Number} gutterWidth The width of the gutter in pixels
         * @param {Number} width The width of the editor in pixels
         * @param {Number} height The hiehgt of the editor, in pixels
         *
         **/
        onResize(force: Boolean, gutterWidth: Number, width: Number, height: Number): number;
        $updateSizeAsync(): void;
        onChangeTabSize(): void;
        onChangeNewLineMode(): void;
        updateCharacterSize(): void;
        mock(): any;
        /**
         * Constructs a new `VirtualRenderer` within the `container` specified, applying the given `theme`.
         * @param {Element} container The root element of the editor
         * @param {String} theme The starting theme
         *
         * @constructor
         **/
        constructor(container: Element, theme: String);
        readonly container: HTMLElement;
        readonly scroller: HTMLElement;
        readonly content: HTMLElement;
        readonly characterWidth: number;
        readonly lineHeight: number;
        readonly scrollLeft: number;
        readonly scrollTop: number;
        readonly $padding: number;

        setOption<T extends keyof VirtualRendererOptions>(name: T, value: VirtualRendererOptions[T]): void;
        getOption<T extends keyof VirtualRendererOptions>(name: T): VirtualRendererOptions[T];
        /**
         *
         * Associates the renderer with an [[EditSession `EditSession`]].
         **/


        setSession(session: EditSession): void;
        /**
         * Triggers a partial update of the text, from the range given by the two parameters.
         * @param {Number} firstRow The first row to update
         * @param {Number} lastRow The last row to update
         *
         **/

        updateLines(firstRow: number, lastRow: number, force?: boolean): void;
        /**
         * Triggers a full update of the text, for all the rows.
         **/

        updateText(): void;
        /**
         * Triggers a full update of all the layers, for all the rows.
         * @param {Boolean} force If `true`, forces the changes through
         *
         **/

        updateFull(force?: boolean): void;
        /**
         * Updates the font size.
         **/

        updateFontSize(): void;
        /**
         * Adjusts the wrap limit, which is the number of characters that can fit within the width of the edit area on screen.
         **/

        adjustWrapLimit(): boolean;
        /**
         * Identifies whether you want to have an animated scroll or not.
         * @param {Boolean} shouldAnimate Set to `true` to show animated scrolls
         *
         **/

        setAnimatedScroll(shouldAnimate: boolean): void;
        /**
         * Returns whether an animated scroll happens or not.
         * @returns {Boolean}
         **/

        getAnimatedScroll(): boolean;
        /**
         * Identifies whether you want to show invisible characters or not.
         * @param {Boolean} showInvisibles Set to `true` to show invisibles
         *
         **/

        setShowInvisibles(showInvisibles: boolean): void;
        /**
         * Returns whether invisible characters are being shown or not.
         * @returns {Boolean}
         **/

        getShowInvisibles(): boolean;

        setDisplayIndentGuides(display: boolean): void;

        getDisplayIndentGuides(): boolean;
        /**
         * Identifies whether you want to show the print margin or not.
         * @param {Boolean} showPrintMargin Set to `true` to show the print margin
         *
         **/

        setShowPrintMargin(showPrintMargin: boolean): void;
        /**
         * Returns whether the print margin is being shown or not.
         * @returns {Boolean}
         **/

        getShowPrintMargin(): boolean;
        /**
         * Identifies whether you want to show the print margin column or not.
         * @param {Boolean} showPrintMargin Set to `true` to show the print margin column
         *
         **/

        setPrintMarginColumn(showPrintMargin: boolean): void;
        /**
         * Returns whether the print margin column is being shown or not.
         * @returns {Boolean}
         **/

        getPrintMarginColumn(): boolean;
        /**
         * Identifies whether you want to show the gutter or not.
         * @param {Boolean} show Set to `true` to show the gutter
         *
         **/

        setShowGutter(show: boolean): void;
        /**
         * Returns `true` if the gutter is being shown.
         * @returns {Boolean}
         **/

        getShowGutter(): boolean;

        setFadeFoldWidgets(show: boolean): void;

        getFadeFoldWidgets(): boolean;

        setHighlightGutterLine(shouldHighlight: boolean): void;

        getHighlightGutterLine(): boolean;
        /**
         *
         * Returns the root element containing this renderer.
         * @returns {Element}
         **/

        getContainerElement(): HTMLElement;
        /**
         *
         * Returns the element that the mouse events are attached to
         * @returns {Element}
         **/

        getMouseEventTarget(): HTMLElement;
        /**
         *
         * Returns the element to which the hidden text area is added.
         * @returns {Element}
         **/

        getTextAreaContainer(): HTMLElement;
        /**
         * [Returns the index of the first visible row.]{: #VirtualRenderer.getFirstVisibleRow}
         * @returns {Number}
         **/

        getFirstVisibleRow(): number;
        /**
         *
         * Returns the index of the first fully visible row. "Fully" here means that the characters in the row are not truncated; that the top and the bottom of the row are on the screen.
         * @returns {Number}
         **/

        getFirstFullyVisibleRow(): number;
        /**
         *
         * Returns the index of the last fully visible row. "Fully" here means that the characters in the row are not truncated; that the top and the bottom of the row are on the screen.
         * @returns {Number}
         **/

        getLastFullyVisibleRow(): number;
        /**
         *
         * [Returns the index of the last visible row.]{: #VirtualRenderer.getLastVisibleRow}
         * @returns {Number}
         **/

        getLastVisibleRow(): number;
        /**
         * Sets the padding for all the layers.
         * @param {Number} padding A new padding value (in pixels)
         *
         **/

        setPadding(padding: number): void;

        setScrollMargin(top: number,
            bottom: number,
            left: number,
            right: number): void;
        /**
         * Identifies whether you want to show the horizontal scrollbar or not.
         * @param {Boolean} alwaysVisible Set to `true` to make the horizontal scroll bar visible
         **/

        setHScrollBarAlwaysVisible(alwaysVisible: boolean): void;
        /**
         * Returns whether the horizontal scrollbar is set to be always visible.
         * @returns {Boolean}
         **/

        getHScrollBarAlwaysVisible(): boolean;
        /**
         * Identifies whether you want to show the horizontal scrollbar or not.
         * @param {Boolean} alwaysVisible Set to `true` to make the horizontal scroll bar visible
         **/

        setVScrollBarAlwaysVisible(alwaysVisible: boolean): void;
        /**
         * Returns whether the horizontal scrollbar is set to be always visible.
         * @returns {Boolean}
         **/

        getVScrollBarAlwaysVisible(): boolean;

        freeze(): void;

        unfreeze(): void;
        /**
         * Schedules an update to all the front markers in the document.
         **/

        updateFrontMarkers(): void;
        /**
         *
         * Schedules an update to all the back markers in the document.
         **/

        updateBackMarkers(): void;
        /**
         *
         * Redraw breakpoints.
         **/

        updateBreakpoints(): void;
        /**
         * Sets annotations for the gutter.
         * @param {Annotation[]} annotations An array containing annotations
         *
         **/

        setAnnotations(annotations: Annotation[]): void;
        /**
         *
         * Updates the cursor icon.
         **/

        updateCursor(): void;
        /**
         *
         * Hides the cursor icon.
         **/

        hideCursor(): void;
        /**
         *
         * Shows the cursor icon.
         **/

        showCursor(): void;

        scrollSelectionIntoView(anchor: Position,
            lead: Position,
            offset?: number): void;
        /**
         *
         * Scrolls the cursor into the first visibile area of the editor
         **/

        scrollCursorIntoView(cursor: Position, offset?: number): void;
        /**
         * {:EditSession.getScrollTop}
         * @related EditSession.getScrollTop
         * @returns {Number}
         **/

        getScrollTop(): number;
        /**
         * {:EditSession.getScrollLeft}
         * @related EditSession.getScrollLeft
         * @returns {Number}
         **/

        getScrollLeft(): number;
        /**
         * Returns the first visible row, regardless of whether it's fully visible or not.
         * @returns {Number}
         **/

        getScrollTopRow(): number;
        /**
         * Returns the last visible row, regardless of whether it's fully visible or not.
         * @returns {Number}
         **/

        getScrollBottomRow(): number;
        /**
         * Gracefully scrolls from the top of the editor to the row indicated.
         * @param {Number} row A row id
         *
         * @related EditSession.setScrollTop
         **/

        scrollToRow(row: number): void;

        alignCursor(cursor: Position | number, alignment: number): number;
        /**
         * Gracefully scrolls the editor to the row indicated.
         * @param {Number} line A line number
         * @param {Boolean} center If `true`, centers the editor the to indicated line
         * @param {Boolean} animate If `true` animates scrolling
         * @param {Function} callback Function to be called after the animation has finished
         *
         **/

        scrollToLine(line: number,
            center: boolean,
            animate: boolean,
            callback: () => void): void;

        animateScrolling(fromValue: number, callback: () => void): void;
        /**
         * Scrolls the editor to the y pixel indicated.
         * @param {Number} scrollTop The position to scroll to
         *
         * @returns {Number}
         **/

        scrollToY(scrollTop: number): void;
        /**
         * Scrolls the editor across the x-axis to the pixel indicated.
         * @param {Number} scrollLeft The position to scroll to
         *
         * @returns {Number}
         **/

        scrollToX(scrollLeft: number): void;
        /**
         * Scrolls the editor across both x- and y-axes.
         * @param {Number} x The x value to scroll to
         * @param {Number} y The y value to scroll to
         **/

        scrollTo(x: number, y: number): void;
        /**
         * Scrolls the editor across both x- and y-axes.
         * @param {Number} deltaX The x value to scroll by
         * @param {Number} deltaY The y value to scroll by
         **/

        scrollBy(deltaX: number, deltaY: number): void;
        /**
         * Returns `true` if you can still scroll by either parameter; in other words, you haven't reached the end of the file or line.
         * @param {Number} deltaX The x value to scroll by
         * @param {Number} deltaY The y value to scroll by
         *
         * @returns {Boolean}
         **/

        isScrollableBy(deltaX: number, deltaY: number): boolean;
        /**
         * Returns an object containing the `pageX` and `pageY` coordinates of the document position.
         * @param {Number} row The document row position
         * @param {Number} column The document column position
         *
         * @returns {Object}
         **/

        textToScreenCoordinates(row: number, column: number): { pageX: number, pageY: number };

        pixelToScreenCoordinates(x: number, y: number): { row: number, column: number, side: 1 | -1, offsetX: number };
        /**
         *
         * Focuses the current container.
         **/

        visualizeFocus(): void;
        /**
         *
         * Blurs the current container.
         **/

        visualizeBlur(): void;
        /**
         * @param {Number} position
         *
         * @private
         **/

        showComposition(position: number): void;
        /**
         * @param {String} text A string of text to use
         *
         * Sets the inner text of the current composition to `text`.
         **/

        setCompositionText(text: string): void;
        /**
         *
         * Hides the current composition.
         **/

        hideComposition(): void;
        /**
         * [Sets a new theme for the editor. `theme` should exist, and be a directory path, like `ace/theme/textmate`.]{: #VirtualRenderer.setTheme}
         * @param {String} theme The path to a theme
         * @param {Function} cb optional callback
         *
         **/

        setTheme(theme: string, callback?: () => void): void;
        /**
         * [Returns the path of the current theme.]{: #VirtualRenderer.getTheme}
         * @returns {String}
         **/

        getTheme(): string;
        /**
         * [Adds a new class, `style`, to the editor.]{: #VirtualRenderer.setStyle}
         * @param {String} style A class name
         *
         **/
        /** Methods allows to add / remove CSS classnames to the editor element.**/

        setStyle(style: string, include?: boolean): void;
        /**
         * [Removes the class `style` from the editor.]{: #VirtualRenderer.unsetStyle}
         * @param {String} style A class name
         *
         **/

        unsetStyle(style: string): void;

        setCursorStyle(style: string): void;
        /**
         * @param {String} cursorStyle A css cursor style
         *
         **/

        setMouseCursor(cursorStyle: string): void;

        attachToShadowRoot(): void;
        /**
         * Destroys the text and cursor layers for this renderer.
         **/

        destroy(): void;

        addEventListener(name: string, callback: Function, capturing?: boolean): void;

        getOptions(optionNames?: string[] | { [p: string]: any }): { [p: string]: any };

        off(name: string, callback: Function): void;

        on(name: string, callback: Function, capturing?: boolean): void;

        once(name: string, callback: Function): void;

        removeDefaultHandler(name: string, callback: Function): void;

        removeEventListener(name: string, callback: Function): void;

        removeListener(name: string, callback: Function): void;

        setDefaultHandler(name: string, callback: Function): void;

        setOptions(optList: { [p: string]: any }): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        removeAllListeners(eventName: any): void;
    }
    /**
     * Contains the cursor position and the text selection of an edit session.
     *
     * The row/columns used in the selection are in document coordinates representing the coordinates as they appear in the document before applying soft wrap and folding.
     * @class Selection
     **/



    export class Selection implements EventEmitter {
        isEqual(data: any): any;
        /**
         * Saves the current cursor position and calls `func` that can change the cursor
         * postion. The result is the range of the starting and eventual cursor position.
         * Will reset the cursor position.
         * @param {Function} The callback that should change the cursor position
         * @returns {Range}
         *
         **/
        getRangeOfMovements(func: any): Range;
        toOrientedRange(range: any): any;
        /** remove listeners from document**/
        detach(): void;
        moveCursorShortWordLeft(): any;
        moveCursorShortWordRight(): any;
        $shortWordEndIndex(rightOfCursor: any): number;
        /**
         *
         * Returns `true` if moving the character next to the cursor in the specified direction is a soft tab.
         * @param {Object} cursor the current cursor position
         * @param {Number} tabSize the tab size
         * @param {Number} direction 1 for right, -1 for left
         */
        wouldMoveIntoSoftTab(cursor: Object, tabSize: Number, direction: Number): boolean;
        getLineRange(row: any, excludeLastChar: any): any;
        /**
         * Moves the selection cursor to the row and column indicated by `pos`.
         * @param {Object} pos An object containing the row and column
         **/
        moveToPosition(pos: Object): void;
        /**
         * Moves the selection cursor to the indicated row and column.
         * @param {Number} row The row to select to
         * @param {Number} column The column to select to
         *
         **/
        moveTo(row: Number, column: Number): void;
        $moveSelection(mover: any): void;
        $setSelection(anchorRow: any, anchorColumn: any, cursorRow: any, cursorColumn: any): void;
        /**
         * Returns an object containing the `row` and `column` of the calling selection lead.
         * @returns {Object}
         **/
        getSelectionLead(): Object;
        /**
         * Returns an object containing the `row` and `column` of the calling selection anchor.
         *
         * @returns {Object}
         * @related Anchor.getPosition
         **/
        getSelectionAnchor(): Object;
        /**
         * Sets the row and column position of the anchor. This function also emits the `'changeSelection'` event.
         * @param {Number} row The new row
         * @param {Number} column The new column
         *
         **/
        setSelectionAnchor(row: Number, column: Number): void;
        /**
         * Emitted when the cursor selection changes.
         *
         *
         @event changeSelection
         **/
        on(name: 'changeSelection'): void;
        /**
         * Emitted when the cursor position changes.
         * @event changeCursor
         *
         **/
        on(name: 'changeCursor'): void;
        /**
         * Creates a new `Selection` object.
         * @param {EditSession} session The session to use
         *
         * @constructor
         **/
        constructor(session: EditSession);
        /**
         *
         * Gets list of ranges composing rectangular block on the screen
         *
         * @param {Cursor} screenCursor The cursor to use
         * @param {Anchor} screenAnchor The anchor to use
         * @param {Boolean} includeEmptyLines If true, this includes ranges inside the block which are empty due to clipping
         * @returns {Range}
         * @method Selection.rectangularRangeBlock
         **/
        rectangularRangeBlock(screenCursor: Cursor, screenAnchor: Anchor, includeEmptyLines: Boolean): Range;
        /**
         * @method Selection.toggleBlockSelection
         **/
        toggleBlockSelection(): void;
        joinSelections(): void;
        /**
         * Splits all the ranges into lines.
         * @method Selection.splitIntoLines
         **/
        splitIntoLines(): void;
        /** adds multicursor support to selection**/
        $initRangeList(): void;
        $onRemoveRange(removed: any): void;
        $onAddRange(range: any): void;
        /**
         * Merges overlapping ranges ensuring consistency after changes
         * @method Selection.mergeOverlappingRanges
         **/
        mergeOverlappingRanges(): void;
        /**
         * Removes a Range containing pos (if it exists).
         * @param {Range} pos The position to remove, as a `{row, column}` object
         * @method Selection.substractPoint
         **/
        substractPoint(pos: Range): any;
        /**
         * @method Selection.toSingleRange
         **/
        toSingleRange(range: any): void;

        moveCursorWordLeft(): void;

        moveCursorWordRight(): void;

        fromOrientedRange(range: Range): void;
        /**
         * Sets the selection to the provided range.
         * @param {Range} range The range of text to select
         * @param {Boolean} reverse Indicates if the range should go backwards (`true`) or not
         *
         * @method setSelectionRange
         * @alias setRange
         **/

        setSelectionRange(match: any): void;
        /**
         * Returns a concatenation of all the ranges.
         * @returns {Range[]}
         * @method Selection.getAllRanges
         **/

        getAllRanges(): Range[];
        /**
         * Adds a range to a selection by entering multiselect mode, if necessary.
         * @param {Range} range The new range to add
         * @param {Boolean} $blockChangeEvents Whether or not to block changing events
         * @method Selection.addRange
         **/

        addRange(range: Range): void;
        /**
         * Returns `true` if the selection is empty.
         * @returns {Boolean}
         **/

        isEmpty(): boolean;
        /**
         * Returns `true` if the selection is a multi-line.
         * @returns {Boolean}
         **/

        isMultiLine(): boolean;
        setCursor(row: number, column: number): void;
        setAnchor(row: number, column: number): void;
        /**
         * Returns an object containing the `row` and `column` of the calling selection anchor.
         *
         * @returns {Object}
         * @related Anchor.getPosition
         **/

        getAnchor(): Position;
        /**
         * Returns an object containing the `row` and `column` current position of the cursor.
         * @returns {Object}
         **/

        getCursor(): Position;
        /**
         * Returns `true` if the selection is going backwards in the document.
         * @returns {Boolean}
         **/

        isBackwards(): boolean;
        /**
         * [Returns the [[Range]] for the selected text.]{: #Selection.getRange}
         * @returns {Range}
         **/

        getRange(): Range;
        /**
         * [Empties the selection (by de-selecting it). This function also emits the `'changeSelection'` event.]{: #Selection.clearSelection}
         **/

        clearSelection(): void;
        /**
         * Selects all the text in the document.
         **/

        selectAll(): void;
        /**
         * Sets the selection to the provided range.
         * @param {Range} range The range of text to select
         * @param {Boolean} reverse Indicates if the range should go backwards (`true`) or not
         *
         * @method setSelectionRange
         * @alias setRange
         **/

        setRange(range: Range, reverse?: boolean): void;
        /**
         * Moves the selection cursor to the indicated row and column.
         * @param {Number} row The row to select to
         * @param {Number} column The column to select to
         **/

        selectTo(row: number, column: number): void;
        /**
         * Moves the selection cursor to the row and column indicated by `pos`.
         * @param {Object} pos An object containing the row and column
         **/

        selectToPosition(pos: any): void;
        /**
         * Moves the selection up one row.
         **/

        selectUp(): void;
        /**
         * Moves the selection down one row.
         **/

        selectDown(): void;
        /**
         * Moves the selection right one column.
         **/

        selectRight(): void;
        /**
         * Moves the selection left one column.
         **/

        selectLeft(): void;
        /**
         * Moves the selection to the beginning of the current line.
         **/

        selectLineStart(): void;
        /**
         * Moves the selection to the end of the current line.
         **/

        selectLineEnd(): void;
        /**
         * Moves the selection to the end of the file.
         **/

        selectFileEnd(): void;
        /**
         * Moves the selection to the start of the file.
         **/

        selectFileStart(): void;
        /**
         * Moves the selection to the first word on the right.
         **/

        selectWordRight(): void;
        /**
         * Moves the selection to the first word on the left.
         **/

        selectWordLeft(): void;
        /**
         * Moves the selection to highlight the entire word.
         * @related EditSession.getWordRange
         **/

        getWordRange(): void;
        /**
         * Selects an entire word boundary.
         **/

        selectWord(): void;
        /**
         * Selects a word, including its right whitespace.
         * @related EditSession.getAWordRange
         **/

        selectAWord(): void;
        /**
         * Selects the entire line.
         **/

        selectLine(): void;
        /**
         * Moves the cursor up one row.
         **/

        moveCursorUp(): void;
        /**
         * Moves the cursor down one row.
         **/

        moveCursorDown(): void;
        /**
         * Moves the cursor left one column.
         **/

        moveCursorLeft(): void;
        /**
         * Moves the cursor right one column.
         **/

        moveCursorRight(): void;
        /**
         * Moves the cursor to the start of the line.
         **/

        moveCursorLineStart(): void;
        /**
         * Moves the cursor to the end of the line.
         **/

        moveCursorLineEnd(): void;
        /**
         * Moves the cursor to the end of the file.
         **/

        moveCursorFileEnd(): void;
        /**
         * Moves the cursor to the start of the file.
         **/

        moveCursorFileStart(): void;
        /**
         * Moves the cursor to the word on the right.
         **/

        moveCursorLongWordRight(): void;
        /**
         *
         * Moves the cursor to the word on the left.
         **/

        moveCursorLongWordLeft(): void;
        /**
         * Moves the cursor to position indicated by the parameters. Negative numbers move the cursor backwards in the document.
         * @param {Number} rows The number of rows to move by
         * @param {Number} chars The number of characters to move by
         *
         * @related EditSession.documentToScreenPosition
         **/

        moveCursorBy(rows: number, chars: number): void;
        /**
         * Moves the selection to the position indicated by its `row` and `column`.
         * @param {Object} position The position to move to
         **/

        moveCursorToPosition(position: any): void;
        /**
         * Moves the cursor to the row and column provided. [If `preventUpdateDesiredColumn` is `true`, then the cursor stays in the same column position as its original point.]{: #preventUpdateBoolDesc}
         * @param {Number} row The row to move to
         * @param {Number} column The column to move to
         * @param {Boolean} keepDesiredColumn [If `true`, the cursor move does not respect the previous column]{: #preventUpdateBool}
         *
         **/

        moveCursorTo(row: number, column: number, keepDesiredColumn?: boolean): void;
        /**
         * Moves the cursor to the screen position indicated by row and column. {:preventUpdateBoolDesc}
         * @param {Number} row The row to move to
         * @param {Number} column The column to move to
         * @param {Boolean} keepDesiredColumn {:preventUpdateBool}
         *
         **/

        moveCursorToScreen(row: number, column: number, keepDesiredColumn: boolean): void;


        toJSON(): SavedSelection | SavedSelection[];

        fromJSON(selection: SavedSelection | SavedSelection[]): void;

        addEventListener(name: string, callback: Function, capturing?: boolean): void;

        off(name: string, callback: Function): void;

        on(name: string, callback: Function, capturing?: boolean): void;

        once(name: string, callback: Function): void;

        removeDefaultHandler(name: string, callback: Function): void;

        removeEventListener(name: string, callback: Function): void;

        removeListener(name: string, callback: Function): void;

        setDefaultHandler(name: string, callback: Function): void;

        _emit(eventName: any, e: any): any;

        _signal(eventName: any, e: any): void;

        removeAllListeners(eventName: any): void;
    }
    interface SavedSelection {
        start: Point;
        end: Point;
        isBackwards: boolean;
    }


    export interface TextInput {
        resetSelection(): void;
    }
    /**
     * The main entry point into the Ace functionality.
     *
     * The `Editor` manages the [[EditSession]] (which manages [[Document]]s), as well as the [[VirtualRenderer]], which draws everything to the screen.
     *
     * Event sessions dealing with the mouse and keyboard are bubbled up from `Document` to the `Editor`, which decides what to do with them.
     * @class Editor
     **/


    export interface Editor extends OptionsProvider, EventEmitter {
        expandSnippet(options: any): any;
        insertSnippet(content: any, options: any): any;
        $reAlignText(lines: any, forceLeft: any): any;
        /**
         * Aligns the cursors or selected text.
         * @method Editor.alignCursors
         **/
        alignCursors(): void;
        /**
         * Finds the next occurrence of text in an active selection and adds it to the selections.
         * @param {Number} dir The direction of lines to select: -1 for up, 1 for down
         * @param {Boolean} skip If `true`, removes the active selection range
         * @method Editor.selectMore
         **/
        selectMore(dir: Number, skip: Boolean, stopAtFirst: any): void;
        /**
         * Transposes the selected ranges.
         * @param {Number} dir The direction to rotate selections
         * @method Editor.transposeSelections
         **/
        transposeSelections(dir: Number): void;
        /**
         * Adds a cursor above or below the active cursor.
         *
         * @param {Number} dir The direction of lines to select: -1 for up, 1 for down
         * @param {Boolean} skip If `true`, removes the active selection range
         *
         * @method Editor.selectMoreLines
         */
        selectMoreLines(dir: Number, skip: Boolean): void;
        $checkMultiselectChange(e: any, anchor: any): void;
        /**
         * Removes all the selections except the last added one.
         * @method Editor.exitMultiSelectMode
         **/
        exitMultiSelectMode(): void;
        /**
         * Executes a command for each selection range.
         * @param {Object} cmd The command to execute
         * @param {String} args Any arguments for the command
         * @method Editor.forEachSelection
         **/
        forEachSelection(cmd: Object, args: String, options: any): any;
        $onMultiSelectExec(e: any): any;
        $onSingleSelect(e: any): void;
        $onMultiSelect(e: any): void;
        $onRemoveRange(e: any): void;
        $onAddRange(e: any): void;
        removeSelectionMarkers(ranges: any): void;
        /**
         * Removes the selection marker.
         * @param {Range} range The selection range added with [[Editor.addSelectionMarker `addSelectionMarker()`]].
         * @method Editor.removeSelectionMarker
         **/
        removeSelectionMarker(range: Range): void;
        /**
         * Adds the selection and cursor.
         * @param {Range} orientedRange A range containing a cursor
         * @returns {Range}
         * @method Editor.addSelectionMarker
         **/
        addSelectionMarker(orientedRange: Range): Range;
        /**
         *
         * Updates the cursor and marker layers.
         * @method Editor.updateSelectionMarkers
         *
         **/
        updateSelectionMarkers(): void;
        showSettingsMenu(): void;
        showKeyboardShortcuts(): void;
        /**
         * opens a prompt displaying message
         **/
        prompt(message: any, options: any, callback: any): void;
        $resetCursorStyle(): void;
        revealRange(range: any, animate: any): void;
        $tryReplace(range: any, replacement: any): any;
        $moveByPage(dir: any, select: any): void;
        /**
         * Returns the number of currently visible rows.
         * @returns {Number}
         **/
        $getVisibleRowCount(): number;
        onCompositionEnd(): void;
        onCompositionUpdate(text: any): void;
        onCompositionStart(compositionState: any): void;
        /**
         * Returns an object indicating the currently selected rows. The object looks like this:
         *
         * ```json
         * { first: range.start.row, last: range.end.row }
         * ```
         *
         * @returns {Object}
         **/
        $getSelectedRows(range: any): { first: any; last: any; };
        /**
         * for internal use
         * @ignore
         *
         **/
        $moveLines(dir: any, copy: any): void;
        toggleWord(): void;
        /**
         * Works like [[EditSession.getTokenAt]], except it returns a number.
         * @returns {Number}
         **/
        getNumberAt(row: any, column: any): { value: any; start: any; end: any; };
        /**
         * Removes all the words to the right of the current selection, until the end of the line.
         **/
        removeToLineEnd(): void;
        /**
         * Removes all the words to the left of the current selection, until the start of the line.
         **/
        removeToLineStart(): void;
        onCommandKey(e: any, hashId: any, keyCode: any): any;
        applyComposition(text: any, composition: any): void;
        onTextInput(text: any, composition: any): any;
        autoIndent(): void;
        $handlePaste(e: any): any;
        /**
         * Called whenever a text "cut" happens.
         **/
        onCut(): void;
        /**
         * Called whenever a text "copy" happens.
         **/
        onCopy(): void;
        onChangeFold(): void;
        onChangeWrapMode(): void;
        onChangeWrapLimit(): void;
        onChangeMode(e: any): void;
        onChangeAnnotation(): void;
        onChangeBreakpoint(): void;
        onChangeBackMarker(): void;
        onChangeFrontMarker(): void;
        $getSelectionHighLightRegexp(): any;
        onSelectionChange(e: any): void;
        $updateHighlightActiveLine(): void;
        /**
         * Emitted when the selection changes.
         *
         **/
        onCursorChange(): void;
        onScrollLeftChange(): void;
        onScrollTopChange(): void;
        onTokenizerUpdate(e: any): void;
        onDocumentChange(delta: any): void;
        $cursorChange(): void;
        onBlur(e: any): void;
        onFocus(e: any): void;
        /** todo: move to mode.getMatching**/
        $highlightTags(): void;
        $highlightBrackets(): void;
        $historyTracker(e: any): void;
        endOperation(e: any): any;
        startOperation(commandEvent: any): void;
        $initOperationListeners(): void;
        /**
         * Creates a new `Editor` object.
         *
         * @param {VirtualRenderer} renderer Associated `VirtualRenderer` that draws everything
         * @param {EditSession} session The `EditSession` to refer to
         *
         *
         * @constructor
         **/
        constructor(renderer: VirtualRenderer, session: EditSession);
        container: HTMLElement;
        renderer: VirtualRenderer;
        id: string;
        commands: CommandManager;
        keyBinding: KeyBinding;
        session: EditSession;
        selection: Selection;
        textInput: TextInput;
        /**
         * Emitted once the editor has been blurred.
         * @event blur
         *
         *
         **/


        on(name: 'blur', callback: (e: Event) => void): void;

        on(name: 'input', callback: () => void): void;
        /**
         * Emitted whenever the document is changed.
         * @event change
         * @param {Object} e Contains a single property, `data`, which has the delta of changes
         *
         *
         *
         **/


        on(name: 'change', callback: (delta: Delta) => void): void;
        /**
         * Emitted when the selection style changes, via [[Editor.setSelectionStyle]].
         * @event changeSelectionStyle
         * @param {Object} data Contains one property, `data`, which indicates the new selection style
         **/


        on(name: 'changeSelectionStyle', callback: (obj: { data: string }) => void): void;
        /**
         * Emitted whenever the [[EditSession]] changes.
         * @event changeSession
         * @param {Object} e An object with two properties, `oldSession` and `session`, that represent the old and new [[EditSession]]s.
         *
         **/


        on(name: 'changeSession',
            callback: (obj: { session: EditSession, oldSession: EditSession }) => void): void;
        /**
         * Emitted when text is copied.
         * @event copy
         * @param {String} text The copied text
         *
         **/


        on(name: 'copy', callback: (obj: { text: string }) => void): void;
        /**
         * Emitted once the editor comes into focus.
         * @event focus
         *
         *
         **/


        on(name: 'focus', callback: (e: Event) => void): void;
        /**
         * Emitted when text is pasted.
         * @event paste
         * @param {Object} an object which contains one property, `text`, that represents the text to be pasted. Editing this property will alter the text that is pasted.
         *
         *
         **/


        on(name: 'paste', callback: (obj: { text: string }) => void): void;

        on(name: 'mousemove', callback: (e: any) => void): void;

        on(name: 'mouseup', callback: (e: any) => void): void;

        on(name: 'mousewheel', callback: (e: any) => void): void;

        on(name: 'click', callback: (e: any) => void): void;
        /**
         * Called whenever a text "paste" happens.
         * @param {String} text The pasted text
         *
         *
         **/


        onPaste(text: string, event: any): void;

        setOption<T extends keyof EditorOptions>(name: T, value: EditorOptions[T]): void;
        getOption<T extends keyof EditorOptions>(name: T): EditorOptions[T];
        /**
         * Sets a new key handler, such as "vim" or "windows".
         * @param {String} keyboardHandler The new key handler
         *
         **/


        setKeyboardHandler(keyboardHandler: string, callback?: () => void): void;
        /**
         * Sets a new key handler, such as "vim" or "windows".
         * @param {String} keyboardHandler The new key handler
         *
         **/

        setKeyboardHandler(keyboardHandler: KeyboardHandler | null): void;
        /**
         * Returns the keyboard handler, such as "vim" or "windows".
         *
         * @returns {String}
         *
         **/

        getKeyboardHandler(): string;
        /**
         * Sets a new editsession to use. This method also emits the `'changeSession'` event.
         * @param {EditSession} session The new session to use
         *
         **/

        setSession(session: EditSession): void;
        /**
         * Returns the current session being used.
         * @returns {EditSession}
         **/

        getSession(): EditSession;
        /**
         * Sets the current document to `val`.
         * @param {String} val The new value to set for the document
         * @param {Number} cursorPos Where to set the new value. `undefined` or 0 is selectAll, -1 is at the document start, and 1 is at the end
         *
         * @returns {String} The current document value
         * @related Document.setValue
         **/

        setValue(val: string, cursorPos?: number): string;
        /**
         * Returns the current session's content.
         *
         * @returns {String}
         * @related EditSession.getValue
         **/

        getValue(): string;
        /**
         *
         * Returns the currently highlighted selection.
         * @returns {Selection} The selection object
         **/

        getSelection(): Selection;
        /**
         * {:VirtualRenderer.onResize}
         * @param {Boolean} force If `true`, recomputes the size, even if the height and width haven't changed
         *
         *
         * @related VirtualRenderer.onResize
         **/

        resize(force?: boolean): void;
        /**
         * {:VirtualRenderer.setTheme}
         * @param {String} theme The path to a theme
         * @param {Function} cb optional callback called when theme is loaded
         **/

        setTheme(theme: string, callback?: () => void): void;
        /**
         * {:VirtualRenderer.getTheme}
         *
         * @returns {String} The set theme
         * @related VirtualRenderer.getTheme
         **/

        getTheme(): string;
        /**
         * {:VirtualRenderer.setStyle}
         * @param {String} style A class name
         *
         *
         * @related VirtualRenderer.setStyle
         **/

        setStyle(style: string): void;
        /**
         * {:VirtualRenderer.unsetStyle}
         * @related VirtualRenderer.unsetStyle
         **/

        unsetStyle(style: string): void;
        /**
         * Gets the current font size of the editor text.
         */

        getFontSize(): string;
        /**
         * Set a new font size (in pixels) for the editor text.
         * @param {String} size A font size ( _e.g._ "12px")
         *
         *
         **/

        setFontSize(size: number): void;
        /**
         *
         * Brings the current `textInput` into focus.
         **/

        focus(): void;
        /**
         * Returns `true` if the current `textInput` is in focus.
         * @return {Boolean}
         **/

        isFocused(): boolean;
        /**
         *
         * Blurs the current `textInput`.
         **/

        blur(): void;

        getSelectedText(): string;
        /**
         * Returns the string of text currently highlighted.
         * @returns {String}
         **/

        getCopyText(): string;

        execCommand(command: string | string[], args?: any): boolean;
        /**
         * Inserts `text` into wherever the cursor is pointing.
         * @param {String} text The new text to add
         *
         **/

        insert(text: string, pasted?: boolean): void;
        /**
         * Pass in `true` to enable overwrites in your session, or `false` to disable. If overwrites is enabled, any text you enter will type over any text after it. If the value of `overwrite` changes, this function also emits the `changeOverwrite` event.
         * @param {Boolean} overwrite Defines whether or not to set overwrites
         *
         *
         * @related EditSession.setOverwrite
         **/

        setOverwrite(overwrite: boolean): void;
        /**
         * Returns `true` if overwrites are enabled; `false` otherwise.
         * @returns {Boolean}
         * @related EditSession.getOverwrite
         **/

        getOverwrite(): boolean;
        /**
         * Sets the value of overwrite to the opposite of whatever it currently is.
         * @related EditSession.toggleOverwrite
         **/

        toggleOverwrite(): void;
        /**
         * Sets how fast the mouse scrolling should do.
         * @param {Number} speed A value indicating the new speed (in milliseconds)
         **/

        setScrollSpeed(speed: number): void;
        /**
         * Returns the value indicating how fast the mouse scroll speed is (in milliseconds).
         * @returns {Number}
         **/

        getScrollSpeed(): number;
        /**
         * Sets the delay (in milliseconds) of the mouse drag.
         * @param {Number} dragDelay A value indicating the new delay
         **/

        setDragDelay(dragDelay: number): void;
        /**
         * Returns the current mouse drag delay.
         * @returns {Number}
         **/

        getDragDelay(): number;
        /**
         * Draw selection markers spanning whole line, or only over selected text. Default value is "line"
         * @param {String} style The new selection style "line"|"text"
         *
         **/

        setSelectionStyle(val: string): void;
        /**
         * Returns the current selection style.
         * @returns {String}
         **/

        getSelectionStyle(): string;
        /**
         * Determines whether or not the current line should be highlighted.
         * @param {Boolean} shouldHighlight Set to `true` to highlight the current line
         **/

        setHighlightActiveLine(shouldHighlight: boolean): void;
        /**
         * Returns `true` if current lines are always highlighted.
         * @return {Boolean}
         **/

        getHighlightActiveLine(): boolean;

        setHighlightGutterLine(shouldHighlight: boolean): void;

        getHighlightGutterLine(): boolean;
        /**
         * Determines if the currently selected word should be highlighted.
         * @param {Boolean} shouldHighlight Set to `true` to highlight the currently selected word
         *
         **/

        setHighlightSelectedWord(shouldHighlight: boolean): void;
        /**
         * Returns `true` if currently highlighted words are to be highlighted.
         * @returns {Boolean}
         **/

        getHighlightSelectedWord(): boolean;

        setAnimatedScroll(shouldAnimate: boolean): void;

        getAnimatedScroll(): boolean;
        /**
         * If `showInvisibles` is set to `true`, invisible characters&mdash;like spaces or new lines&mdash;are show in the editor.
         * @param {Boolean} showInvisibles Specifies whether or not to show invisible characters
         *
         **/

        setShowInvisibles(showInvisibles: boolean): void;
        /**
         * Returns `true` if invisible characters are being shown.
         * @returns {Boolean}
         **/

        getShowInvisibles(): boolean;

        setDisplayIndentGuides(display: boolean): void;

        getDisplayIndentGuides(): boolean;
        /**
         * If `showPrintMargin` is set to `true`, the print margin is shown in the editor.
         * @param {Boolean} showPrintMargin Specifies whether or not to show the print margin
         *
         **/

        setShowPrintMargin(showPrintMargin: boolean): void;
        /**
         * Returns `true` if the print margin is being shown.
         * @returns {Boolean}
         **/

        getShowPrintMargin(): boolean;
        /**
         * Sets the column defining where the print margin should be.
         * @param {Number} showPrintMargin Specifies the new print margin
         *
         **/

        setPrintMarginColumn(showPrintMargin: number): void;
        /**
         * Returns the column number of where the print margin is.
         * @returns {Number}
         **/

        getPrintMarginColumn(): number;
        /**
         * If `readOnly` is true, then the editor is set to read-only mode, and none of the content can change.
         * @param {Boolean} readOnly Specifies whether the editor can be modified or not
         *
         **/

        setReadOnly(readOnly: boolean): void;
        /**
         * Returns `true` if the editor is set to read-only mode.
         * @returns {Boolean}
         **/

        getReadOnly(): boolean;
        /**
         * Specifies whether to use behaviors or not. ["Behaviors" in this case is the auto-pairing of special characters, like quotation marks, parenthesis, or brackets.]{: #BehaviorsDef}
         * @param {Boolean} enabled Enables or disables behaviors
         *
         **/

        setBehavioursEnabled(enabled: boolean): void;
        /**
         * Returns `true` if the behaviors are currently enabled. {:BehaviorsDef}
         *
         * @returns {Boolean}
         **/

        getBehavioursEnabled(): boolean;
        /**
         * Specifies whether to use wrapping behaviors or not, i.e. automatically wrapping the selection with characters such as brackets
         * when such a character is typed in.
         * @param {Boolean} enabled Enables or disables wrapping behaviors
         *
         **/

        setWrapBehavioursEnabled(enabled: boolean): void;
        /**
         * Returns `true` if the wrapping behaviors are currently enabled.
         **/

        getWrapBehavioursEnabled(): boolean;
        /**
         * Indicates whether the fold widgets should be shown or not.
         * @param {Boolean} show Specifies whether the fold widgets are shown
         **/

        setShowFoldWidgets(show: boolean): void;
        /**
         * Returns `true` if the fold widgets are shown.
         * @return {Boolean}
         **/

        getShowFoldWidgets(): boolean;

        setFadeFoldWidgets(fade: boolean): void;

        getFadeFoldWidgets(): boolean;
        /**
         * Removes the current selection or one character.
         * @param {String} dir The direction of the deletion to occur, either "left" or "right"
         *
         **/

        remove(dir?: 'left' | 'right'): void;
        /**
         * Removes the word directly to the right of the current selection.
         **/

        removeWordRight(): void;
        /**
         * Removes the word directly to the left of the current selection.
         **/

        removeWordLeft(): void;
        removeLineToEnd(): void;
        /**
         * Splits the line at the current selection (by inserting an `'\n'`).
         **/

        splitLine(): void;
        /**
         * Transposes current line.
         **/

        transposeLetters(): void;
        /**
         * Converts the current selection entirely into lowercase.
         **/

        toLowerCase(): void;
        /**
         * Converts the current selection entirely into uppercase.
         **/

        toUpperCase(): void;
        /**
         * Inserts an indentation into the current cursor position or indents the selected lines.
         *
         * @related EditSession.indentRows
         **/

        indent(): void;
        /**
         * Indents the current line.
         * @related EditSession.indentRows
         **/

        blockIndent(): void;
        /**
         * Outdents the current line.
         * @related EditSession.outdentRows
         **/

        blockOutdent(): void;
        /** TODO: move out of core when we have good mechanism for managing extensions**/

        sortLines(): void;
        /**
         * Given the currently selected range, this function either comments all the lines, or uncomments all of them.
         **/

        toggleCommentLines(): void;

        toggleBlockComment(): void;
        /**
         * If the character before the cursor is a number, this functions changes its value by `amount`.
         * @param {Number} amount The value to change the numeral by (can be negative to decrease value)
         *
         **/

        modifyNumber(amount: number): void;
        /**
         * Removes all the lines in the current selection
         * @related EditSession.remove
         **/

        removeLines(): void;

        duplicateSelection(): void;
        /**
         * Shifts all the selected lines down one row.
         *
         * @returns {Number} On success, it returns -1.
         * @related EditSession.moveLinesUp
         **/

        moveLinesDown(): void;
        /**
         * Shifts all the selected lines up one row.
         * @returns {Number} On success, it returns -1.
         * @related EditSession.moveLinesDown
         **/

        moveLinesUp(): void;
        /**
         * Moves a range of text from the given range to the given position. `toPosition` is an object that looks like this:
         * ```json
         *
         { row: newRowLocation, column: newColumnLocation }
         * ```
         * @param {Range} fromRange The range of text you want moved within the document
         * @param {Object} toPosition The location (row and column) where you want to move the text to
         *
         * @returns {Range} The new range where the text was moved to.
         * @related EditSession.moveText
         **/

        moveText(range: Range, toPosition: Point, copy?: boolean): Range;
        /**
         * Copies all the selected lines up one row.
         * @returns {Number} On success, returns 0.
         *
         **/

        copyLinesUp(): void;
        /**
         * Copies all the selected lines down one row.
         * @returns {Number} On success, returns the number of new rows added; in other words, `lastRow - firstRow + 1`.
         * @related EditSession.duplicateLines
         *
         **/

        copyLinesDown(): void;
        /**
         * {:VirtualRenderer.getFirstVisibleRow}
         *
         * @returns {Number}
         * @related VirtualRenderer.getFirstVisibleRow
         **/

        getFirstVisibleRow(): number;
        /**
         * {:VirtualRenderer.getLastVisibleRow}
         *
         * @returns {Number}
         * @related VirtualRenderer.getLastVisibleRow
         **/

        getLastVisibleRow(): number;
        /**
         * Indicates if the row is currently visible on the screen.
         * @param {Number} row The row to check
         *
         * @returns {Boolean}
         **/

        isRowVisible(row: number): boolean;
        /**
         * Indicates if the entire row is currently visible on the screen.
         * @param {Number} row The row to check
         *
         *
         * @returns {Boolean}
         **/

        isRowFullyVisible(row: number): boolean;
        /**
         * Selects the text from the current position of the document until where a "page down" finishes.
         **/

        selectPageDown(): void;
        /**
         * Selects the text from the current position of the document until where a "page up" finishes.
         **/

        selectPageUp(): void;
        /**
         * Shifts the document to wherever "page down" is, as well as moving the cursor position.
         **/

        gotoPageDown(): void;
        /**
         * Shifts the document to wherever "page up" is, as well as moving the cursor position.
         **/

        gotoPageUp(): void;
        /**
         * Scrolls the document to wherever "page down" is, without changing the cursor position.
         **/

        scrollPageDown(): void;
        /**
         * Scrolls the document to wherever "page up" is, without changing the cursor position.
         **/

        scrollPageUp(): void;
        /**
         * Moves the editor to the specified row.
         * @related VirtualRenderer.scrollToRow
         **/

        scrollToRow(row: number): void;
        /**
         * Scrolls to a line. If `center` is `true`, it puts the line in middle of screen (or attempts to).
         * @param {Number} line The line to scroll to
         * @param {Boolean} center If `true`
         * @param {Boolean} animate If `true` animates scrolling
         * @param {Function} callback Function to be called when the animation has finished
         *
         *
         * @related VirtualRenderer.scrollToLine
         **/

        scrollToLine(line: number, center: boolean, animate: boolean, callback: () => void): void;
        /**
         * Attempts to center the current selection on the screen.
         **/

        centerSelection(): void;
        /**
         * Gets the current position of the cursor.
         * @returns {Object} An object that looks something like this:
         *
         * ```json
         * { row: currRow, column: currCol }
         * ```
         *
         * @related Selection.getCursor
         **/

        getCursorPosition(): Point;
        /**
         * Returns the screen position of the cursor.
         * @returns {Number}
         * @related EditSession.documentToScreenPosition
         **/

        getCursorPositionScreen(): Point;
        /**
         * {:Selection.getRange}
         * @returns {Range}
         * @related Selection.getRange
         **/

        getSelectionRange(): Range;
        /**
         * Selects all the text in editor.
         * @related Selection.selectAll
         **/

        selectAll(): void;
        /**
         * {:Selection.clearSelection}
         * @related Selection.clearSelection
         **/

        clearSelection(): void;
        /**
         * Moves the cursor to the specified row and column. Note that this does not de-select the current selection.
         * @param {Number} row The new row number
         * @param {Number} column The new column number
         *
         *
         * @related Selection.moveCursorTo
         **/

        moveCursorTo(row: number, column: number): void;
        /**
         * Moves the cursor to the position indicated by `pos.row` and `pos.column`.
         * @param {Object} pos An object with two properties, row and column
         *
         *
         * @related Selection.moveCursorToPosition
         **/

        moveCursorToPosition(pos: Point): void;
        /**
         * Moves the cursor's row and column to the next matching bracket or HTML tag.
         *
         **/

        jumpToMatching(select: boolean, expand: boolean): void;
        /**
         * Moves the cursor to the specified line number, and also into the indicated column.
         * @param {Number} lineNumber The line number to go to
         * @param {Number} column A column number to go to
         * @param {Boolean} animate If `true` animates scolling
         *
         **/

        gotoLine(lineNumber: number, column: number, animate: boolean): void;
        /**
         * Moves the cursor to the specified row and column. Note that this does de-select the current selection.
         * @param {Number} row The new row number
         * @param {Number} column The new column number
         *
         *
         * @related Editor.moveCursorTo
         **/

        navigateTo(row: number, column: number): void;
        /**
         * Moves the cursor up in the document the specified number of times. Note that this does de-select the current selection.
         * @param {Number} times The number of times to change navigation
         *
         *
         **/

        navigateUp(): void;
        /**
         * Moves the cursor down in the document the specified number of times. Note that this does de-select the current selection.
         * @param {Number} times The number of times to change navigation
         *
         *
         **/

        navigateDown(): void;
        /**
         * Moves the cursor left in the document the specified number of times. Note that this does de-select the current selection.
         * @param {Number} times The number of times to change navigation
         *
         *
         **/

        navigateLeft(): void;
        /**
         * Moves the cursor right in the document the specified number of times. Note that this does de-select the current selection.
         * @param {Number} times The number of times to change navigation
         *
         *
         **/

        navigateRight(): void;
        /**
         *
         * Moves the cursor to the start of the current line. Note that this does de-select the current selection.
         **/

        navigateLineStart(): void;
        /**
         *
         * Moves the cursor to the end of the current line. Note that this does de-select the current selection.
         **/

        navigateLineEnd(): void;
        /**
         *
         * Moves the cursor to the end of the current file. Note that this does de-select the current selection.
         **/

        navigateFileEnd(): void;
        /**
         *
         * Moves the cursor to the start of the current file. Note that this does de-select the current selection.
         **/

        navigateFileStart(): void;
        /**
         *
         * Moves the cursor to the word immediately to the right of the current position. Note that this does de-select the current selection.
         **/

        navigateWordRight(): void;
        /**
         *
         * Moves the cursor to the word immediately to the left of the current position. Note that this does de-select the current selection.
         **/

        navigateWordLeft(): void;
        /**
         * Replaces the first occurrence of `options.needle` with the value in `replacement`.
         * @param {String} replacement The text to replace with
         * @param {Object} options The [[Search `Search`]] options to use
         *
         *
         **/

        replace(replacement: string, options?: Partial<SearchOptions>): number;
        /**
         * Replaces all occurrences of `options.needle` with the value in `replacement`.
         * @param {String} replacement The text to replace with
         * @param {Object} options The [[Search `Search`]] options to use
         *
         *
         **/

        replaceAll(replacement: string, options?: Partial<SearchOptions>): number;
        /**
         * {:Search.getOptions} For more information on `options`, see [[Search `Search`]].
         * @related Search.getOptions
         * @returns {Object}
         **/

        getLastSearchOptions(): Partial<SearchOptions>;
        /**
         * Attempts to find `needle` within the document. For more information on `options`, see [[Search `Search`]].
         * @param {String} needle The text to search for (optional)
         * @param {Object} options An object defining various search properties
         * @param {Boolean} animate If `true` animate scrolling
         *
         *
         * @related Search.find
         **/

        find(needle: string | RegExp, options?: Partial<SearchOptions>, animate?: boolean): Ace.Range | undefined;
        /**
         * Performs another search for `needle` in the document. For more information on `options`, see [[Search `Search`]].
         * @param {Object} options search options
         * @param {Boolean} animate If `true` animate scrolling
         *
         *
         * @related Editor.find
         **/

        findNext(options?: Partial<SearchOptions>, animate?: boolean): void;
        /**
         * Performs a search for `needle` backwards. For more information on `options`, see [[Search `Search`]].
         * @param {Object} options search options
         * @param {Boolean} animate If `true` animate scrolling
         *
         *
         * @related Editor.find
         **/

        findPrevious(options?: Partial<SearchOptions>, animate?: boolean): void;
        /**
         * Finds and selects all the occurrences of `needle`.
         * @param {String} The text to find
         * @param {Object} The search options
         * @param {Boolean} keeps
         *
         * @returns {Number} The cumulative count of all found matches
         * @method Editor.findAll
         **/

        findAll(needle: string | RegExp, options?: Partial<SearchOptions>, additive?: boolean): number;
        /**
         * {:UndoManager.undo}
         * @related UndoManager.undo
         **/

        undo(): void;
        /**
         * {:UndoManager.redo}
         * @related UndoManager.redo
         **/

        redo(): void;
        /**
         *
         * Cleans up the entire editor.
         **/

        destroy(): void;
        /**
         * Enables automatic scrolling of the cursor into view when editor itself is inside scrollable element
         * @param {Boolean} enable default true
         **/

        setAutoScrollEditorIntoView(enable: boolean): void;
        completers: Completer[];
    }

    type CompleterCallback = (error: any, completions: Completion[]) => void;

    interface Completer {
        identifierRegexps?: Array<RegExp>,
        getCompletions(editor: Editor,
            session: EditSession,
            position: Point,
            prefix: string,
            callback: CompleterCallback): void;
    }
}


export const version: string;
export const config: Ace.Config;
export function require(name: string): any;
export function edit(el: Element | string, options?: Partial<Ace.EditorOptions>): Ace.Editor;
export function createEditSession(text: Ace.Document | string, mode: Ace.SyntaxMode): Ace.EditSession;
