export namespace Ace {
    export class Tooltip {
        destroy(): void;
        getWidth(): Number;
        getHeight(): Number;
        hide(): void;
        show(text: String, x: Number, y: Number): void;
        setClassName(className: String): void;
        setPosition(x: Number, y: Number): void;
        setHtml(html: String): void;
        setText(text: String): void;
        getElement(): Element;
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

    export class Event {
        stopPropagation(): void;
        preventDefault(): void;
        initMouseEvent(type: any, _1: any, _2: any, window: any, detail: any, x: any, y: any, _x: any, _y: any, ctrl: any, alt: any, shift: any, meta: any, button: any, relatedTarget: any): void;
    }

    export class Generator {
        toArray(breakOnError: any, callback: any): void;
        end(breakOnError: any, callback: any): void;
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
        insertSnippet(editor: any, snippetText: any): any;
        insertSnippetForSelection(editor: any, snippetText: any): void;
        resolveVariables(snippet: any, editor: any): {};
        tmFormatFunction(str: any, ch: any, editor: any): any;
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

    export class Search {
        replace(input: String, replacement: String): String;
        findAll(session: EditSession): [Range];
        find(session: EditSession): Range;
        setOptions(options: any): void;
        getOptions(): Object;
        set(options: Object): Search;
        constructor();
    }

    export class HScrollBar {
        setScrollLeft(scrollLeft: any): void;
        setScrollWidth(width: Number): void;
        setInnerWidth(width: Number): void;
        setWidth(width: Number): void;
        getHeight(): Number;
        on(name: 'scroll', callback: (e: Object) => void): void;
        onScroll(): void;
        constructor(parent: Element, renderer: Object);
    }

    export class VScrollBar {
        setScrollTop(scrollTop: Number): void;
        setInnerHeight(height: Number): void;
        setScrollHeight(height: Number): void;
        setHeight(height: Number): void;
        getWidth(): Number;
        on(name: 'scroll', callback: (e: Object) => void): void;
        onScroll(): void;
        constructor(parent: Element, renderer: Object);
    }

    export class ScrollBar {
        setVisible(isVisible: any): void;
        constructor(parent: Element);
    }

    export class RenderLoop {
        clear(change: any): any;
        schedule(change: any): void;
    }

    export class RangeList {
        detach(): void;
        attach(session: any): void;
        removeAll(): any;
        clipRows(startRow: any, endRow: any): {};
        rangeAtPoint(pos: any): any;
        containsPoint(pos: any): boolean;
        contains(row: any, column: any): boolean;
        merge(): {};
        substractPoint(pos: any): any;
        addList(list: any): {};
        add(range: any): any;
        pointIndex(pos: any, excludeEdges: any, startIndex: any): any;
    }

    export class PlaceHolder {
        cancel(): void;
        detach(): void;
        onCursorChange(event: any): void;
        updateMarkers(): void;
        updateAnchors(delta: any): void;
        onUpdate(delta: any): any;
        hideOtherMarkers(): void;
        showOtherMarkers(): void;
        setup(): void;
        constructor();
    }

    export class Occur {
        matchingLines(session: any, options: any): any;
        occurToOriginalPosition(session: EditSession, pos: Object): Object;
        originalToOccurPosition(session: EditSession, pos: Object): { row: number; column: any; };
        displayOriginalContent(editor: any): void;
        displayOccurContent(editor: any, options: any): void;
        highlight(sess: any, regexp: any): void;
        exit(editor: Editor, options: Object): boolean;
        enter(editor: Editor, options: Object): boolean;
        constructor();
    }

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

    export class MouseEvent {
        getShiftKey(): any;
        getButton(): any;
        inSelection(): any;
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

    export class MatchingParensOutdent {
        autoOutdent(doc: any, row: any): number;
        checkOutdent(line: any, input: any): any;
    }

    export class MatchingBraceOutdent {
        autoOutdent(doc: any, row: any): number;
        checkOutdent(line: any, input: any): any;
    }

    export class FoldMode {
        _pop(stack: any, tag: any): any;
        _readTagBackward(iterator: any): any;
        _readTagForward(iterator: any): any;
        _findEndTagInLine(session: any, row: any, tagName: any, startColumn: any): boolean;
        _getFirstTagInLine(session: any, row: any): any;
        getCommentFoldWidget(session: any, row: any): "" | "start";
        vbsBlock(session: any, row: any, column: any, tokenRange: any): any;
        getBeginEndBlock(session: any, row: any, column: any, matchSequence: string): Range;
        rubyBlock(session: any, row: any, column: any, tokenRange: any): any;
        luaBlock(session: any, row: any, column: any, tokenRange: any): any;
        latexSection(session: any, row: any, column: any): any;
        latexBlock(session: any, row: any, column: any, returnRange: any): any;
        isHeading(session: any, row: any): boolean;
        closingBracketBlock(session: any, bracket: any, row: any, column: any, typeRe: any): any;
        openingBracketBlock(session: any, bracket: any, row: any, column: any, typeRe: any): any;
        indentationBlock(session: any, row: any, column: any): any;
        getCommentRegionBlock(session: any, line: any, row: any): any;
        getSectionRange(session: any, row: any): any;
        getRegionBlock(session: any, line: any, row: any): any;
        getUsingStatementBlock(session: any, line: any, row: any): any;
        getFoldWidgetRange(session: any, foldStyle: any, row: any): any;
        getFoldWidget(session: any, foldStyle: any, row: any): any;
    }

    export class Behaviour {
        getBehaviours(filter: any): any;
        inherit(mode: any, filter: any): void;
        remove(name: any): void;
        addBehaviours(behaviours: any): void;
        add(name: any, action: any, callback: any): void;
    }

    export class LineWidgets {
        renderWidgets(e: any, renderer: any): void;
        measureWidgets(e: any, renderer: any): void;
        onWidgetChanged(w: any): void;
        getWidgetsAtRow(row: any): {};
        removeLineWidget(w: any): void;
        addLineWidget(w: any): any;
        updateOnChange(delta: any): void;
        updateOnFold(e: any, session: any): void;
        detach(e: any): void;
        attach(editor: any): void;
        getRowLength(row: any): any;
    }

    export class Keys {
    }

    export class EventListener {
        destroy(): void;
    }

    export class AppConfig {
        setDefaultValues(path: any, optionHash: any): void;
        setDefaultValue(path: any, name: any, value: any): boolean;
        resetOptions(obj: any): void;
        defineOptions(obj: any, path: any, options: any): any;
    }

    export class Text {
        destroy(): void;
        renderIndentGuide(parent: any, value: any, max: any): any;
        update(config: any): void;
        scrollLines(config: any): any;
        updateLines(config: any, firstRow: any, lastRow: any): any;
        onChangeTabSize(): void;
        setDisplayIndentGuides(display: any): boolean;
        setShowInvisibles(showInvisibles: any): boolean;
        setSession(session: any): void;
        checkForSizeChanges(): void;
        getCharacterWidth(): any;
        getLineHeight(): any;
        setPadding(padding: any): void;
    }

    export class Marker {
        drawScreenLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawFullLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawBidiSingleLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraLength: any, extraStyle: any): void;
        drawSingleLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraLength: any, extraStyle: any): any;
        drawMultiLineMarker(stringBuilder: any, range: any, clazz: any, config: any, extraStyle: any): void;
        drawTextMarker(stringBuilder: any, range: any, clazz: any, layerConfig: any, extraStyle: any): void;
        update(config: any): void;
        elt(className: any, css: any): void;
        setMarkers(markers: any): void;
        setSession(session: any): void;
        setPadding(padding: any): void;
    }

    export class Lines {
        createCell(row: any, config: any, session: any, initElement: any): any;
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
        getShowFoldWidgets(): any;
        setShowFoldWidgets(show: any): void;
        getShowLineNumbers(): any;
        setShowLineNumbers(show: any): void;
        setHighlightGutterLine(highlightGutterLine: any): void;
        scrollLines(config: any): any;
        updateLineHighlight(): void;
        update(config: any): void;
        setAnnotations(annotations: any): void;
        removeGutterDecoration(row: any, className: any): void;
        addGutterDecoration(row: any, className: any): void;
        setSession(session: any): void;
    }

    export class FontMetrics {
        transformCoordinates(clientPos: any, elPos: any): {};
        destroy(): void;
        getCharacterWidth(ch: any): any;
        setPolling(val: any): void;
        checkForSizeChanges(size: any): void;
    }

    export class Cursor {
        destroy(): void;
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
    }

    export class MultiHashHandler {
    }

    export class HashHandler {
        getStatusText(editor: any, data: any): any;
        handleKeyboard(data: any, hashId: any, keyString: any, keyCode: any): { command: any; };
        findKeyCommand(hashId: any, keyString: any): any;
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
        setSearchRange(range: any): void;
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

    export class Mode {
        getKeywords(append: any): any;
        transformAction(state: any, action: any, editor: any, session: any, param: any): any;
        allowAutoInsert(): boolean;
        getLanguageMode(position: any): "R" | "HTML";
        toggleCommentLines(state: any, doc: any, startRow: any, endRow: any): void;
        getMatching(session: any, row: any, column: any, tokenRange: any): any;
        getCompletions(state: any, session: any, pos: any, prefix: any): any;
        createWorker(session: any): any;
        autoOutdent(state: any, doc: any, row: any): void;
        checkOutdent(state: any, line: any, input: any): any;
        getNextLineIndent(state: any, line: any, tab: any): any;
        supportsFile(filename: any): any;
    }

    export class ElasticTabstopsLite {
        processRows(rows: any): void;
    }

    export class BracketMatch {
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

    export class BidiHandler {
        offsetToCol(posX: Number): Number;
        getSelections(startCol: Number, endCol: Number): Object[];
        getPosLeft(col: Number): number;
        setRtlDirection(editor: any, isRtlDir: any): void;
        isRtlLine(row: any): any;
        setContentWidth(width: any): void;
        setEolChar(eolChar: any): void;
        setShowInvisibles(showInvisibles: any): void;
        updateCharacterWidths(fontMetrics: any): void;
        markAsDirty(): void;
        updateBidiMap(): void;
        updateRowLine(docRow: any, splitIndex: any): void;
        getSplitIndex(): number;
        getDocumentRow(): number;
        onChange(delta: any): void;
        isBidiRow(screenRow: any, docRow: any, splitIndex: any): any;
        constructor(session: EditSession);
    }

    export class BackgroundTokenizer {
        cleanup(): void;
        getState(row: Number): string;
        getTokens(row: Number): Token[];
        stop(): void;
        scheduleStart(): void;
        start(startRow: Number): void;
        on(name: 'update', callback: (e: Object) => void): void;
        fireUpdateEvent(firstRow: Number, lastRow: Number): void;
        setDocument(doc: Document): void;
        setTokenizer(tokenizer: Tokenizer): void;
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
    }

    export class AcePopup {
        constructor(parentNode: Element);
    }

    export type NewLineMode = 'auto' | 'unix' | 'windows';

    export class Anchor implements EventEmitter {
        on(name: 'change', callback: (e: Object) => void): void;
        onChange(delta: Ace.Delta): void;
        constructor(doc: Document, row: Number, column: Number);
        getPosition(): Position;
        getDocument(): Document;
        setPosition(row: number, column: number, noClip?: boolean): void;
        detach(): void;
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

        removeAllListeners(name?: string): void;

    }

    export class Document implements EventEmitter {
        on(name: 'change', callback: (e: Object) => void): void;
        removeLines(firstRow: any, lastRow: any): any;
        insertLines(row: any, lines: any): any;
        constructor(textOrLines: String | String[]);
        setValue(text: string): void;
        getValue(): string;
        createAnchor(row: number, column: number): Anchor;
        getNewLineCharacter(): string;
        setNewLineMode(newLineMode: NewLineMode): void;
        getNewLineMode(): NewLineMode;
        isNewLine(text: string): boolean;
        getLine(row: number): string;
        getLines(firstRow: number, lastRow: number): string[];
        getAllLines(): string[];
        getLength(): number;
        getTextRange(range: Range): string;
        getLinesForRange(range: Range): string[];
        insert(position: Position, text: string): Position;
        insert(position: { row: number, column: number }, text: string): Position;
        insertInLine(position: Position, text: string): Position;
        insertNewLine(position: Point): Point;
        clippedPos(row: number, column: number): Point;
        clonePos(pos: Point): Point;
        pos(row: number, column: number): Point;
        insertFullLines(row: number, lines: string[]): void;
        insertMergedLines(position: Position, lines: string[]): Point;
        remove(range: Range): Position;
        removeInLine(row: number, startColumn: number, endColumn: number): Position;
        removeFullLines(firstRow: number, lastRow: number): string[];
        removeNewLine(row: number): void;
        replace(range: Range, text: string): Position;
        applyDeltas(deltas: Delta[]): void;
        revertDeltas(deltas: Delta[]): void;
        applyDelta(delta: Delta, doNotValidate?: boolean): void;
        revertDelta(delta: Delta): void;
        indexToPosition(index: number, startRow: number): Position;
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

        removeAllListeners(name?: string): void;

    }

    export class FoldLine {
        toString(): any;
        folds: Fold[];
        range: Range;
        start: Point;
        end: Point;

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
        onFoldWidgetClick(row: any, e: any): void;
        foldAllComments(): void;
        foldToLevel(level: any): void;
        getRowFoldStart(docRow: any, startFoldRow: any): any;
        getRowFoldEnd(docRow: any, startFoldRow: any): any;
        getFoldAt(row: number, column: number, side: number): Fold;
        getFoldsInRange(range: Range): Fold[];
        getFoldsInRangeList(ranges: Range[]): Fold[];
        getAllFolds(): Fold[];
        getFoldStringAt(row: number,
            column: number,
            trim?: number,
            foldLine?: FoldLine): string | null;
        getFoldLine(docRow: number, startFoldLine?: FoldLine): FoldLine | null;
        getNextFoldLine(docRow: number, startFoldLine?: FoldLine): FoldLine | null;
        getFoldedRowCount(first: number, last: number): number;
        addFold(placeholder: string | Fold, range?: Range): Fold;
        addFolds(folds: Fold[]): void;
        removeFold(fold: Fold): void;
        removeFolds(folds: Fold[]): void;
        expandFold(fold: Fold): void;
        expandFolds(folds: Fold[]): void;
        unfold(location: null | number | Point | Range,
            expandInner?: boolean): Fold[] | undefined;
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

    export class Range {
        comparePoints(p1: Ace.Point, p2: Ace.Point): number;
        fromPoints(start: Point, end: Point): Range;
        constructor(startRow: Number, startColumn: Number, endRow: Number, endColumn: Number);
        start: Point;
        end: Point;

        isEqual(range: Range): boolean;
        toString(): string;
        contains(row: number, column: number): boolean;
        compareRange(range: Range): number;
        comparePoint(p: Point): number;
        containsRange(range: Range): boolean;
        intersects(range: Range): boolean;
        isEnd(row: number, column: number): boolean;
        isStart(row: number, column: number): boolean;
        setStart(row: number, column: number): void;
        setEnd(row: number, column: number): void;
        inside(row: number, column: number): boolean;
        insideStart(row: number, column: number): boolean;
        insideEnd(row: number, column: number): boolean;
        compare(row: number, column: number): number;
        compareStart(row: number, column: number): number;
        compareEnd(row: number, column: number): number;
        compareInside(row: number, column: number): number;
        clipRows(firstRow: number, lastRow: number): Range;
        extend(row: number, column: number): Range;
        isEmpty(): boolean;
        isMultiLine(): boolean;
        clone(): Range;
        collapseRows(): Range;
        toScreenRange(session: EditSession): Range;
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
        keyboardHandler: string | null;
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
        removeAllListeners(name?: string): void;
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
        range?: Range;
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

    export class Tokenizer {
        constructor(rules: Object);
        removeCapturingGroups(src: string): string;
        createSplitterRegexp(src: string, flag?: string): RegExp;
        getLineTokens(line: string, startState: string | string[]): Token[];
    }

    class TokenIterator {
        constructor(session: EditSession, initialRow: Number, initialColumn: Number);
        getCurrentToken(): Token;
        getCurrentTokenColumn(): number;
        getCurrentTokenRow(): number;
        getCurrentTokenPosition(): Point;
        getCurrentTokenRange(): Range;
        stepBackward(): Token;
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

    export class UndoManager {
        fromJSON(): void;
        toJSON(): void;
        getChangedLines(from: any, to: any): void;
        getChangedRanges(from: any, to: any): void;
        constructor();
        addSession(session: EditSession): void;
        add(delta: Delta, allowMerge: boolean, session: EditSession): void;
        addSelection(selection: string, rev?: number): void;
        startNewGroup(): void;
        markIgnored(from: number, to?: number): void;
        getSelection(rev: number, after?: boolean): { value: string, rev: number };
        getRevision(): number;
        getDeltas(from: number, to?: number): Delta[];
        undo(session: EditSession, dontSelect?: boolean): void;
        redo(session: EditSession, dontSelect?: boolean): void;
        reset(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        bookmark(rev?: number): void;
        isAtBookmark(): boolean;
    }

    export interface Position {
        row: number,
        column: number
    }

    export class EditSession implements EventEmitter, OptionsProvider {
        getSelectionMarkers(): any;
        getDocumentLastRowColumnPosition(docRow: Number, docColumn: Number): any;
        getRowLength(row: Number): Number;
        onReloadTokenizer(e: any): void;
        toString(): String;
        onChange(delta: any): void;
        onChangeFold(e: any): void;
        on(name: 'changeWrapLimit'): void;
        on(name: 'changeWrapMode'): void;
        on(name: 'changeMode'): void;
        on(name: 'changeAnnotation'): void;
        on(name: 'changeBackMarker'): void;
        on(name: 'changeFrontMarker'): void;
        on(name: 'changeBreakpoint'): void;
        on(name: 'changeOverwrite'): void;
        on(name: 'changeTabSize'): void;
        constructor(text: Document | String, mode: Mode);
        selection: Selection;

        // TODO: define BackgroundTokenizer

        on(name: 'changeFold',
            callback: (obj: { data: Fold, action: string }) => void): Function;
        on(name: 'changeScrollLeft', callback: (scrollLeft: number) => void): Function;
        on(name: 'changeScrollTop', callback: (scrollTop: number) => void): Function;
        on(name: 'tokenizerUpdate',
            callback: (obj: { data: { first: number, last: number } }) => void): Function;
        on(name: 'change', callback: () => void): Function;


        setOption<T extends keyof EditSessionOptions>(name: T, value: EditSessionOptions[T]): void;
        getOption<T extends keyof EditSessionOptions>(name: T): EditSessionOptions[T];

        readonly doc: Document;

        setDocument(doc: Document): void;
        getDocument(): Document;
        resetCaches(): void;
        setValue(text: string): void;
        getValue(): string;
        getSelection(): Selection;
        getState(row: number): string;
        getTokens(row: number): Token[];
        getTokenAt(row: number, column: number): Token | null;
        setUndoManager(undoManager: UndoManager): void;
        markUndoGroup(): void;
        getUndoManager(): UndoManager;
        getTabString(): string;
        setUseSoftTabs(val: boolean): void;
        getUseSoftTabs(): boolean;
        setTabSize(tabSize: number): void;
        getTabSize(): number;
        isTabStop(position: Position): boolean;
        setNavigateWithinSoftTabs(navigateWithinSoftTabs: boolean): void;
        getNavigateWithinSoftTabs(): boolean;
        setOverwrite(overwrite: boolean): void;
        getOverwrite(): boolean;
        toggleOverwrite(): void;
        addGutterDecoration(row: number, className: string): void;
        removeGutterDecoration(row: number, className: string): void;
        getBreakpoints(): string[];
        setBreakpoints(rows: number[]): void;
        clearBreakpoints(): void;
        setBreakpoint(row: number, className: string): void;
        clearBreakpoint(row: number): void;
        addMarker(range: Range,
            className: string,
            type: "fullLine" | "screenLine" | "text" | MarkerRenderer,
            inFront?: boolean): number;
        addDynamicMarker(marker: MarkerLike, inFront: boolean): MarkerLike;
        removeMarker(markerId: number): void;
        getMarkers(inFront?: boolean): MarkerLike[];
        highlight(re: RegExp): void;
        highlightLines(startRow: number,
            endRow: number,
            className: string,
            inFront?: boolean): Range;
        setAnnotations(annotations: Annotation[]): void;
        getAnnotations(): Annotation[];
        clearAnnotations(): void;
        getWordRange(row: number, column: number): Range;
        getAWordRange(row: number, column: number): Range;
        setNewLineMode(newLineMode: NewLineMode): void;
        getNewLineMode(): NewLineMode;
        setUseWorker(useWorker: boolean): void;
        getUseWorker(): boolean;
        setMode(mode: string | SyntaxMode, callback?: () => void): void;
        getMode(): SyntaxMode;
        setScrollTop(scrollTop: number): void;
        getScrollTop(): number;
        setScrollLeft(scrollLeft: number): void;
        getScrollLeft(): number;
        getScreenWidth(): number;
        getLineWidgetMaxWidth(): number;
        getLine(row: number): string;
        getLines(firstRow: number, lastRow: number): string[];
        getLength(): number;
        getTextRange(range: Range): string;
        insert(position: Position, text: string): void;
        remove(range: Range): void;
        removeFullLines(firstRow: number, lastRow: number): void;
        undoChanges(deltas: Delta[], dontSelect?: boolean): void;
        redoChanges(deltas: Delta[], dontSelect?: boolean): void;
        setUndoSelect(enable: boolean): void;
        replace(range: Range, text: string): void;
        moveText(fromRange: Range, toPosition: Position, copy?: boolean): void;
        indentRows(startRow: number, endRow: number, indentString: string): void;
        outdentRows(range: Range): void;
        moveLinesUp(firstRow: number, lastRow: number): void;
        moveLinesDown(firstRow: number, lastRow: number): void;
        duplicateLines(firstRow: number, lastRow: number): void;
        setUseWrapMode(useWrapMode: boolean): void;
        getUseWrapMode(): boolean;
        setWrapLimitRange(min: number, max: number): void;
        adjustWrapLimit(desiredLimit: number): boolean;
        getWrapLimit(): number;
        setWrapLimit(limit: number): void;
        getWrapLimitRange(): { min: number, max: number };
        getRowLineCount(row: number): number;
        getRowWrapIndent(screenRow: number): number;
        getScreenLastRowColumn(screenRow: number): number;
        getDocumentLastRowColumn(docRow: number, docColumn: number): number;
        getdocumentLastRowColumnPosition(docRow: number, docColumn: number): Position;
        getRowSplitData(row: number): string | undefined;
        getScreenTabSize(screenColumn: number): number;
        screenToDocumentRow(screenRow: number, screenColumn: number): number;
        screenToDocumentColumn(screenRow: number, screenColumn: number): number;
        screenToDocumentPosition(screenRow: number,
            screenColumn: number,
            offsetX?: number): Position;
        documentToScreenPosition(docRow: number, docColumn: number): Position;
        documentToScreenPosition(position: Position): Position;
        documentToScreenColumn(row: number, docColumn: number): number;
        documentToScreenRow(docRow: number, docColumn: number): number;
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

        removeAllListeners(name?: string): void;

    }

    export class KeyBinding {
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

    export class VirtualRenderer implements OptionsProvider, EventEmitter {
        removeExtraToken(row: any, column: any): void;
        addToken(text: any, type: any, row: any, column: any): void;
        screenToTextCoordinates(x: any, y: any): any;
        removeGutterDecoration(row: any, className: any): void;
        addGutterDecoration(row: any, className: any): void;
        setMargin(top: any, bottom: any, left: any, right: any): void;
        onGutterResize(width: any): void;
        onResize(force: Boolean, gutterWidth: Number, width: Number, height: Number): number;
        onChangeTabSize(): void;
        onChangeNewLineMode(): void;
        updateCharacterSize(): void;
        mock(): any;
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

        setSession(session: EditSession): void;
        updateLines(firstRow: number, lastRow: number, force?: boolean): void;
        updateText(): void;
        updateFull(force?: boolean): void;
        updateFontSize(): void;
        adjustWrapLimit(): boolean;
        setAnimatedScroll(shouldAnimate: boolean): void;
        getAnimatedScroll(): boolean;
        setShowInvisibles(showInvisibles: boolean): void;
        getShowInvisibles(): boolean;
        setDisplayIndentGuides(display: boolean): void;
        getDisplayIndentGuides(): boolean;
        setShowPrintMargin(showPrintMargin: boolean): void;
        getShowPrintMargin(): boolean;
        setPrintMarginColumn(showPrintMargin: boolean): void;
        getPrintMarginColumn(): boolean;
        setShowGutter(show: boolean): void;
        getShowGutter(): boolean;
        setFadeFoldWidgets(show: boolean): void;
        getFadeFoldWidgets(): boolean;
        setHighlightGutterLine(shouldHighlight: boolean): void;
        getHighlightGutterLine(): boolean;
        getContainerElement(): HTMLElement;
        getMouseEventTarget(): HTMLElement;
        getTextAreaContainer(): HTMLElement;
        getFirstVisibleRow(): number;
        getFirstFullyVisibleRow(): number;
        getLastFullyVisibleRow(): number;
        getLastVisibleRow(): number;
        setPadding(padding: number): void;
        setScrollMargin(top: number,
            bottom: number,
            left: number,
            right: number): void;
        setHScrollBarAlwaysVisible(alwaysVisible: boolean): void;
        getHScrollBarAlwaysVisible(): boolean;
        setVScrollBarAlwaysVisible(alwaysVisible: boolean): void;
        getVScrollBarAlwaysVisible(): boolean;
        freeze(): void;
        unfreeze(): void;
        updateFrontMarkers(): void;
        updateBackMarkers(): void;
        updateBreakpoints(): void;
        setAnnotations(annotations: Annotation[]): void;
        updateCursor(): void;
        hideCursor(): void;
        showCursor(): void;
        scrollSelectionIntoView(anchor: Position,
            lead: Position,
            offset?: number): void;
        scrollCursorIntoView(cursor: Position, offset?: number): void;
        getScrollTop(): number;
        getScrollLeft(): number;
        getScrollTopRow(): number;
        getScrollBottomRow(): number;
        scrollToRow(row: number): void;
        alignCursor(cursor: Position | number, alignment: number): number;
        scrollToLine(line: number,
            center: boolean,
            animate: boolean,
            callback: () => void): void;
        animateScrolling(fromValue: number, callback: () => void): void;
        scrollToY(scrollTop: number): void;
        scrollToX(scrollLeft: number): void;
        scrollTo(x: number, y: number): void;
        scrollBy(deltaX: number, deltaY: number): void;
        isScrollableBy(deltaX: number, deltaY: number): boolean;
        textToScreenCoordinates(row: number, column: number): { pageX: number, pageY: number };
        pixelToScreenCoordinates(x: number, y: number): { row: number, column: number, side: 1 | -1, offsetX: number };
        visualizeFocus(): void;
        visualizeBlur(): void;
        showComposition(position: number): void;
        setCompositionText(text: string): void;
        hideComposition(): void;
        setTheme(theme: string, callback?: () => void): void;
        getTheme(): string;
        setStyle(style: string, include?: boolean): void;
        unsetStyle(style: string): void;
        setCursorStyle(style: string): void;
        setMouseCursor(cursorStyle: string): void;
        attachToShadowRoot(): void;
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

        removeAllListeners(name?: string): void;

    }


    export class Selection implements EventEmitter {
        isEqual(data: any): any;
        getRangeOfMovements(func: any): Range;
        toOrientedRange(range: any): any;
        detach(): void;
        moveCursorShortWordLeft(): any;
        moveCursorShortWordRight(): any;
        wouldMoveIntoSoftTab(cursor: Object, tabSize: Number, direction: Number): boolean;
        getLineRange(row: any, excludeLastChar: any): any;
        moveToPosition(pos: Object): void;
        moveTo(row: Number, column: Number): void;
        getSelectionLead(): Object;
        getSelectionAnchor(): Object;
        setSelectionAnchor(row: Number, column: Number): void;
        on(name: 'changeSelection'): void;
        on(name: 'changeCursor'): void;
        constructor(session: EditSession);
        rectangularRangeBlock(screenCursor: Cursor, screenAnchor: Anchor, includeEmptyLines: Boolean): Range;
        toggleBlockSelection(): void;
        joinSelections(): void;
        splitIntoLines(): void;
        mergeOverlappingRanges(): void;
        substractPoint(pos: Range): any;
        toSingleRange(range: any): void;
        moveCursorWordLeft(): void;
        moveCursorWordRight(): void;
        fromOrientedRange(range: Range): void;
        setSelectionRange(match: any): void;
        getAllRanges(): Range[];
        addRange(range: Range): void;
        isEmpty(): boolean;
        isMultiLine(): boolean;
        setCursor(row: number, column: number): void;
        setAnchor(row: number, column: number): void;
        getAnchor(): Position;
        getCursor(): Position;
        isBackwards(): boolean;
        getRange(): Range;
        clearSelection(): void;
        selectAll(): void;
        setRange(range: Range, reverse?: boolean): void;
        selectTo(row: number, column: number): void;
        selectToPosition(pos: any): void;
        selectUp(): void;
        selectDown(): void;
        selectRight(): void;
        selectLeft(): void;
        selectLineStart(): void;
        selectLineEnd(): void;
        selectFileEnd(): void;
        selectFileStart(): void;
        selectWordRight(): void;
        selectWordLeft(): void;
        getWordRange(): void;
        selectWord(): void;
        selectAWord(): void;
        selectLine(): void;
        moveCursorUp(): void;
        moveCursorDown(): void;
        moveCursorLeft(): void;
        moveCursorRight(): void;
        moveCursorLineStart(): void;
        moveCursorLineEnd(): void;
        moveCursorFileEnd(): void;
        moveCursorFileStart(): void;
        moveCursorLongWordRight(): void;
        moveCursorLongWordLeft(): void;
        moveCursorBy(rows: number, chars: number): void;
        moveCursorToPosition(position: any): void;
        moveCursorTo(row: number, column: number, keepDesiredColumn?: boolean): void;
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

        removeAllListeners(name?: string): void;

    }
    interface SavedSelection {
        start: Point;
        end: Point;
        isBackwards: boolean;
    }

    export interface TextInput {
        resetSelection(): void;
    }

    export class Editor implements OptionsProvider, EventEmitter {
        expandSnippet(options: any): any;
        insertSnippet(content: any, options: any): any;
        alignCursors(): void;
        selectMore(dir: Number, skip: Boolean, stopAtFirst: any): void;
        transposeSelections(dir: Number): void;
        selectMoreLines(dir: Number, skip: Boolean): void;
        exitMultiSelectMode(): void;
        forEachSelection(cmd: Object, args: String, options: any): any;
        removeSelectionMarkers(ranges: any): void;
        removeSelectionMarker(range: Range): void;
        addSelectionMarker(orientedRange: Range): Range;
        updateSelectionMarkers(): void;
        showSettingsMenu(): void;
        showKeyboardShortcuts(): void;
        prompt(message: any, options: any, callback: any): void;
        revealRange(range: any, animate: any): void;
        onCompositionEnd(): void;
        onCompositionUpdate(text: any): void;
        onCompositionStart(compositionState: any): void;
        toggleWord(): void;
        getNumberAt(row: any, column: any): { value: any; start: any; end: any; };
        removeToLineEnd(): void;
        removeToLineStart(): void;
        onCommandKey(e: any, hashId: any, keyCode: any): any;
        applyComposition(text: any, composition: any): void;
        onTextInput(text: any, composition: any): any;
        autoIndent(): void;
        onCut(): void;
        onCopy(): void;
        onChangeFold(): void;
        onChangeWrapMode(): void;
        onChangeWrapLimit(): void;
        onChangeMode(e: any): void;
        onChangeAnnotation(): void;
        onChangeBreakpoint(): void;
        onChangeBackMarker(): void;
        onChangeFrontMarker(): void;
        onSelectionChange(e: any): void;
        onCursorChange(): void;
        onScrollLeftChange(): void;
        onScrollTopChange(): void;
        onTokenizerUpdate(e: any): void;
        onDocumentChange(delta: any): void;
        onBlur(e: any): void;
        onFocus(e: any): void;
        endOperation(e: any): any;
        startOperation(commandEvent: any): void;
        constructor(renderer: VirtualRenderer, session: EditSession);
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        addEventListener(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        removeListener(name: string, callback: Function): void;
        removeEventListener(name: string, callback: Function): void;
        _emit(eventName: any, e: any);
        _signal(eventName: any, e: any): void;
        removeAllListeners(name?: string): void;
        setOptions(optList: { [key: string]: any; }): void;
        getOptions(optionNames?: string[] | { [key: string]: any; }): { [key: string]: any; };
        container: HTMLElement;
        renderer: VirtualRenderer;
        id: string;
        commands: CommandManager;
        keyBinding: KeyBinding;
        session: EditSession;
        selection: Selection;
        textInput: TextInput;

        on(name: 'blur', callback: (e: Event) => void): void;
        on(name: 'input', callback: () => void): void;
        on(name: 'change', callback: (delta: Delta) => void): void;
        on(name: 'changeSelectionStyle', callback: (obj: { data: string }) => void): void;
        on(name: 'changeSession',
            callback: (obj: { session: EditSession, oldSession: EditSession }) => void): void;
        on(name: 'copy', callback: (obj: { text: string }) => void): void;
        on(name: 'focus', callback: (e: Event) => void): void;
        on(name: 'paste', callback: (obj: { text: string }) => void): void;
        on(name: 'mousemove', callback: (e: any) => void): void;
        on(name: 'mouseup', callback: (e: any) => void): void;
        on(name: 'mousewheel', callback: (e: any) => void): void;
        on(name: 'click', callback: (e: any) => void): void;

        onPaste(text: string, event: any): void;

        setOption<T extends keyof EditorOptions>(name: T, value: EditorOptions[T]): void;
        getOption<T extends keyof EditorOptions>(name: T): EditorOptions[T];

        setKeyboardHandler(keyboardHandler: string, callback?: () => void): void;
        setKeyboardHandler(keyboardHandler: KeyboardHandler | null): void;
        getKeyboardHandler(): string;
        setSession(session: EditSession): void;
        getSession(): EditSession;
        setValue(val: string, cursorPos?: number): string;
        getValue(): string;
        getSelection(): Selection;
        resize(force?: boolean): void;
        setTheme(theme: string, callback?: () => void): void;
        getTheme(): string;
        setStyle(style: string): void;
        unsetStyle(style: string): void;
        getFontSize(): string;
        setFontSize(size: number): void;
        focus(): void;
        isFocused(): boolean;
        blur(): void;
        getSelectedText(): string;
        getCopyText(): string;
        execCommand(command: string | string[], args?: any): boolean;
        insert(text: string, pasted?: boolean): void;
        setOverwrite(overwrite: boolean): void;
        getOverwrite(): boolean;
        toggleOverwrite(): void;
        setScrollSpeed(speed: number): void;
        getScrollSpeed(): number;
        setDragDelay(dragDelay: number): void;
        getDragDelay(): number;
        setSelectionStyle(val: string): void;
        getSelectionStyle(): string;
        setHighlightActiveLine(shouldHighlight: boolean): void;
        getHighlightActiveLine(): boolean;
        setHighlightGutterLine(shouldHighlight: boolean): void;
        getHighlightGutterLine(): boolean;
        setHighlightSelectedWord(shouldHighlight: boolean): void;
        getHighlightSelectedWord(): boolean;
        setAnimatedScroll(shouldAnimate: boolean): void;
        getAnimatedScroll(): boolean;
        setShowInvisibles(showInvisibles: boolean): void;
        getShowInvisibles(): boolean;
        setDisplayIndentGuides(display: boolean): void;
        getDisplayIndentGuides(): boolean;
        setShowPrintMargin(showPrintMargin: boolean): void;
        getShowPrintMargin(): boolean;
        setPrintMarginColumn(showPrintMargin: number): void;
        getPrintMarginColumn(): number;
        setReadOnly(readOnly: boolean): void;
        getReadOnly(): boolean;
        setBehavioursEnabled(enabled: boolean): void;
        getBehavioursEnabled(): boolean;
        setWrapBehavioursEnabled(enabled: boolean): void;
        getWrapBehavioursEnabled(): boolean;
        setShowFoldWidgets(show: boolean): void;
        getShowFoldWidgets(): boolean;
        setFadeFoldWidgets(fade: boolean): void;
        getFadeFoldWidgets(): boolean;
        remove(dir?: 'left' | 'right'): void;
        removeWordRight(): void;
        removeWordLeft(): void;
        removeLineToEnd(): void;
        splitLine(): void;
        transposeLetters(): void;
        toLowerCase(): void;
        toUpperCase(): void;
        indent(): void;
        blockIndent(): void;
        blockOutdent(): void;
        sortLines(): void;
        toggleCommentLines(): void;
        toggleBlockComment(): void;
        modifyNumber(amount: number): void;
        removeLines(): void;
        duplicateSelection(): void;
        moveLinesDown(): void;
        moveLinesUp(): void;
        moveText(range: Range, toPosition: Point, copy?: boolean): Range;
        copyLinesUp(): void;
        copyLinesDown(): void;
        getFirstVisibleRow(): number;
        getLastVisibleRow(): number;
        isRowVisible(row: number): boolean;
        isRowFullyVisible(row: number): boolean;
        selectPageDown(): void;
        selectPageUp(): void;
        gotoPageDown(): void;
        gotoPageUp(): void;
        scrollPageDown(): void;
        scrollPageUp(): void;
        scrollToRow(row: number): void;
        scrollToLine(line: number, center: boolean, animate: boolean, callback: () => void): void;
        centerSelection(): void;
        getCursorPosition(): Point;
        getCursorPositionScreen(): Point;
        getSelectionRange(): Range;
        selectAll(): void;
        clearSelection(): void;
        moveCursorTo(row: number, column: number): void;
        moveCursorToPosition(pos: Point): void;
        jumpToMatching(select: boolean, expand: boolean): void;
        gotoLine(lineNumber: number, column: number, animate: boolean): void;
        navigateTo(row: number, column: number): void;
        navigateUp(): void;
        navigateDown(): void;
        navigateLeft(): void;
        navigateRight(): void;
        navigateLineStart(): void;
        navigateLineEnd(): void;
        navigateFileEnd(): void;
        navigateFileStart(): void;
        navigateWordRight(): void;
        navigateWordLeft(): void;
        replace(replacement: string, options?: Partial<SearchOptions>): number;
        replaceAll(replacement: string, options?: Partial<SearchOptions>): number;
        getLastSearchOptions(): Partial<SearchOptions>;
        find(needle: string | RegExp, options?: Partial<SearchOptions>, animate?: boolean): Ace.Range | undefined;
        findNext(options?: Partial<SearchOptions>, animate?: boolean): void;
        findPrevious(options?: Partial<SearchOptions>, animate?: boolean): void;
        findAll(needle: string | RegExp, options?: Partial<SearchOptions>, additive?: boolean): number;
        undo(): void;
        redo(): void;
        destroy(): void;
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
