export namespace Ace {
    export type NewLineMode = 'auto' | 'unix' | 'windows';

    export class Anchor implements EventEmitter {
        constructor(doc: Document, row: number, column: number);
        on(name: 'change', callback: (delta: Delta) => void): void;
        getPosition(): Point;
        getDocument(): Document;
        setPosition(row: number, column: number, noClip?: boolean): void;
        detach(): void;
        attach(doc: Document): void;
        $clipPositionToDocument(row: number, column: number): Point;
        onChange(delta: Delta): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
    }

    export class Document implements EventEmitter {
        constructor(textOrLines: string | string[]);
        on(name: 'change', callback: (delta: Delta) => void): void;
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
        getTextRange(range: Range): string;
        getLinesForRange(range: Range): string[];
        insert(position: Point, text: string): Point;
        insertInLine(position: Point, text: string): Point;
        clippedPos(row: number, column: number): Point;
        clonePos(pos: Point): Point;
        pos(row: number, column: number): Point;
        insertFullLines(row: number, lines: string[]): void;
        insertMergedLines(position: Point, lines: string[]): Point;
        remove(range: Range): Point;
        removeInLine(row: number, startColumn: number, endColumn: number): Point;
        removeFullLines(firstRow: number, lastRow: number): string[];
        removeNewLine(row: number): void;
        replace(range: Range, text: string): Point;
        applyDeltas(deltas: Delta[]): void;
        revertDeltas(deltas: Delta[]): void;
        applyDelta(delta: Delta, doNotValidate?: boolean): void;
        revertDelta(delta: Delta): void;
        indexToPosition(index: number, startRow: number): Point;
        positionToIndex(pos: Point, startRow?: number): number;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        $split(text: string): string;
        $detectNewLine(text: string): void;
        getLength(): number;
        $clipPosition(position: Point): Point;
        $splitAndapplyLargeDelta(delta: Delta, MAX: number): void;
    }

    export class FoldLine {
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
        getFoldAt(row:number, column:number, side:number):Fold;
        getFoldsInRange(range:Range):Array<Fold>;
        getFoldsInRangeList(ranges:Array<Range>):Array<Fold>;
        getAllFolds():Array<Fold>;
        addFold(placeholder:string, range:Range):Fold;
        addFolds(folds:Array<Fold>);
        removeFold(fold:Fold);
        removeFolds(folds:Array<Fold>);
        expandFold(fold:Fold);
        expandFolds(folds:Array<Fold>);
        foldAll(startRow:number, endRow:number, depth:number);
        getFoldStringAt(row: number, column: number, trim, foldLine?: FoldLine):string|null;
        getFoldLine(docRow: number, startFoldLine?: string): string|null;
        getNextFoldLine(docRow: number, startFoldLine?: string): string|null;
        getFoldedRowCount(first: number, last: number): number;
        $addFoldLine(foldLine: FoldLine): string;
        unfold(location: number|Point|Range, expandInner?: boolean): Fold[];
        isRowFolded(docRow: number, startFoldRow: string): boolean;
        getRowFoldEnd(docRow: number, startFoldRow: string): number;
        getRowFoldStart(docRow: number, startFoldRow: string): number;
        getFoldDisplayLine(foldLine: FoldLine, endRow: number, endColumn: number, startRow: number, startColumn: number): string;
        getDisplayLine(row: number, endColumn: number, startRow: number, startColumn: number): string;
        $cloneFoldData(): FoldLine;
        toggleFold(tryToUnfold?:any): void;
        getCommentFoldRange(row: number, column: number, dir: number): Range;
        setFoldStyle(style: string): void;
        $setFolding(foldMode?: any): void;
        getParentFoldRangeData(row: number, ignoreCurrent?: any): {range: Range; firstRange: Range};
        onFoldWidgetClick(row: number, e: Event): void;
        $toggleFoldWidget(row: number, options: any): Fold|Range;
        toggleFoldWidget(toggleParent?: any): void;
        updateFoldWidgets(delta: Delta): void;
        tokenizerUpdateFoldWidgets(e: Event): void;
    }

    export class Range {
        constructor(startRow: number, startColumn: number, endRow: number, endColumn: number);
        fromPoints(start: Point, end: Point): Range;
        comparePoints(p1: Point, p2: Point): number;
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
        wrap: string | number;
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
        vScrollBarAlwaysVisible: boolean;
        hScrollBarAlwaysVisible: boolean;
        fontSize: number;
        fontFamily: string;
        maxLines: number;
        minLines: number;
        scrollPastEnd: boolean;
        fixedWidthGutter: boolean;
        theme: string;
        hasCssTransforms: boolean;
        maxPixelHeight: number;
        useTextareaForIME: boolean;
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
        selectionStyle: string;
        highlightActiveLine: boolean;
        highlightSelectedWord: boolean;
        readOnly: boolean;
        copyWithEmptySelection: boolean;
        cursorStyle: 'ace' | 'slim' | 'smooth' | 'wide';
        mergeUndoDeltas: true | false | 'always';
        behavioursEnabled: boolean;
        wrapBehavioursEnabled: boolean;
        autoScrollEditorIntoView: boolean;
        keyboardHandler: string;
        value: string;
        session: EditSession;
        showLineNumbers: boolean;
        relativeLineNumbers: any;
        useElasticTabstops: any;
        enableEmmet: boolean;
        enableBasicAutocompletion: boolean;
        enableLiveAutocompletion: boolean;
        enableSnippets: boolean;
        enableLinking: boolean;
        rtlText: any;
        spellcheck: boolean;
        useIncrementalSearch: any;
        enableMultiselect: boolean;
        enableBlockSelect: boolean
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
        wholeWord: string;
        caseSensitive: boolean;
        wrap: boolean;
    }

    export interface EventEmitter {
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
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

    export class Tokenizer {
        removeCapturingGroups(src: string): string;
        createSplitterRegexp(src: string, flag?: string): RegExp;
        getLineTokens(line: string, startState: string | string[]): Token[];
        $setMaxTokenCount(m?: number): void;
        $applyToken(str: string): Token[];
        $arrayTokens(str: string): Token[];
    }

    class TokenIterator{
        constructor(session: EditSession, initialRow: number, initialColumn: number);
        getCurrentToken():Token;
        getCurrentTokenColumn():number;
        getCurrentTokenRow():number;
        getCurrentTokenPosition():Point;
        getCurrentTokenRange():Range;
        stepBackward():Token;
        stepForward():Token;
    }

    export class Mode {
        $id: string;
        tokenRe: RegExp;
        nonTokenRe: RegExp;
        $defaultBehaviour: CstyleBehaviour;
        lineCommentStart: string;
        blockComment: string;
        $getIndent(line: string): string;
        $delegator(method: string, args: any[], defaultHandler: any): any;
        $createKeywordList(): any;
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
        createModeDelegates(mapping: {[key: string]: string}): void;
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
        all(): {[key: string]: any};
        moduleUrl(name: string, component?: string): string;
        setModuleUrl(name: string, subst: string): string;
        loadModule(moduleName: string | [string, string],
                   onLoad: (module: any) => void): void;
        init(packaged: any): any;
        defineOptions(obj: any, path: string, options: {[key: string]: any}): Config;
        resetOptions(obj: any): void;
        setDefaultValue(path: string, name: string, value: any): void;
        setDefaultValues(path: string, optionHash: {[key: string]: any}): void;
    }

    export interface OptionsProvider {
        setOptions(optList: {[key: string]: any}): void;
        getOptions(optionNames?: string[] | {[key: string]: any}): {[key: string]: any};
        setOption(name: string, value: any): void;
        getOption(name: string): any;
    }

    export class UndoManager {
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
        getChangedRanges(from: number, to?: number): void;
        getChangedLines(from: number, to?: number): void;
        $syncRev(): void;
        toJSON(): void;
        fromJSON(): void;
        $prettyPrint(delta: Delta): string;
    }

    export interface CstyleBehaviour {
        isSaneInsertion(editor: Editor, session: EditSession): boolean;
        $matchTokenType(token: Token, types: string[]): boolean;
        recordAutoInsert(editor: Editor, session: EditSession, bracket: string): void;
        recordMaybeInsert(editor: Editor, session: EditSession, bracket: string): void;
        isAutoInsertedClosing(cursor: Point, line: string, bracket: string): boolean;
        popAutoInsertedClosing(): void;
        clearMaybeInsertedClosing(): void;
    }

    export class EditSession implements EventEmitter, OptionsProvider, Folding {
        constructor(text: string | Document, mode?: Mode);
        selection: Selection;

        on(name: 'change', callback: (delta: Delta) => void): void;
        on(name: 'changeTabSize'): void;
        on(name: 'changeOverwrite'): void;
        on(name: 'changeBreakpoint', callback: (rows: number[]) => void): void;
        on(name: 'changeAnnotation', callback: (annotations: Annotation[]) => void): void;
        on(name: 'changeMode'): void;
        on(name: 'changeWrapMode'): void;
        on(name: 'changeWrapLimit'): void;
        on(name: 'changeFrontMarker'): void;
        on(name: 'changeBackMarker'): void;

        on(name: 'changeFold',
           callback: (obj: { data: Fold, action: string }) => void): void;
        on(name: 'changeScrollLeft', callback: (scrollLeft: number) => void): void;
        on(name: 'changeScrollTop', callback: (scrollTop: number) => void): void;
        on(name: 'tokenizerUpdate',
           callback: (obj: { data: { first: number, last: number } }) => void): void;


        setOption<T extends keyof EditSessionOptions>(name: T, value: EditSessionOptions[T]): void;
        getOption<T extends keyof EditSessionOptions>(name: T): EditSessionOptions[T];

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
        isTabStop(position: Point): boolean;
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
                  clazz: string,
                  type: MarkerRenderer,
                  inFront: boolean): number;
        addDynamicMarker(marker: MarkerLike, inFront: boolean): MarkerLike;
        removeMarker(markerId: number): void;
        getMarkers(inFront?: boolean): MarkerLike[];
        highlight(re: RegExp): void;
        highlightLines(startRow: number,
                       endRow: number,
                       clazz: string,
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
        setMode(mode: string | Mode, callback?: () => void): void;
        getMode(): Mode;
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
        insert(position: Point, text: string): void;
        remove(range: Range): void;
        removeFullLines(firstRow: number, lastRow: number): void;
        undoChanges(deltas: Delta[], dontSelect?: boolean): void;
        redoChanges(deltas: Delta[], dontSelect?: boolean): void;
        setUndoSelect(enable: boolean): void;
        replace(range: Range, text: string): void;
        moveText(fromRange: Range, toPosition: Point, copy?: boolean): void;
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
        getdocumentLastRowColumnPosition(docRow: number, docColumn: number): Point;
        getRowSplitData(row: number): string | undefined;
        getScreenTabSize(screenColumn: number): number;
        screenToDocumentRow(screenRow: number, screenColumn: number): number;
        screenToDocumentColumn(screenRow: number, screenColumn: number): number;
        screenToDocumentPosition(screenRow: number,
                                 screenColumn: number,
                                 offsetX?: number): Point;
        documentToScreenPosition(docRow: number, docColumn: number): Point;
        documentToScreenPosition(position: Point): Point;
        documentToScreenColumn(row: number, docColumn: number): number;
        documentToScreenRow(docRow: number, docColumn: number): number;
        getScreenLength(): number;
        destroy(): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        off(name: string, callback: Function): void;
        getFoldAt(row:number, column:number, side:number):Fold;
        getFoldsInRange(range:Range):Array<Fold>;
        getFoldsInRangeList(ranges:Array<Range>):Array<Fold>;
        getAllFolds():Array<Fold>;
        addFold(placeholder:string, range:Range):Fold;
        addFolds(folds:Array<Fold>);
        removeFold(fold:Fold);
        removeFolds(folds:Array<Fold>);
        expandFold(fold:Fold);
        expandFolds(folds:Array<Fold>);
        foldAll(startRow:number, endRow:number, depth:number);
        setOptions(optList: {[key: string]: any}): void;
        getOptions(optionNames?: string[] | {[key: string]: any}): {[key: string]: any};
        setOption(name: string, value: any): void;
        getOption(name: string): any;
        $resetRowCache(docRow: number): void;
        $getRowCacheIndex(cacheArray: number[], val: number): number;
        onChangeFold(e: { data: Fold, action: string }): void;
        onChange(delta: Delta): void;
        $syncInformUndoManager(): void;
        $detectNewLine(text: string): void;
        onReloadTokenizer(e: { data: { first: number, last: number } }): void;
        $onChangeMode(mode: Mode, $isPlaceholder?: boolean): void;
        $stopWorker(): void;
        $startWorker(): void;
        $computeWidth(force: boolean): number;
        $getUndoSelection(deltas: Delta[], isUndo?: boolean): Range;
        $moveLines(firstRow: number, lastRow: number, dir: number): number;
        $clipRowToDocument(row: number): number;
        $clipColumnToRow(row: number, column: number): number;
        $clipPositionToDocument(row: number, column: number): Point;
        $clipRangeToDocument(range: Range): Range;
        $constrainWrapLimit(wrapLimit: number, min: number, max: number): number;
        $updateInternalDataOnChange(delta: Delta):Array<Fold>;
        $updateRowLengthCache(firstRow: number, lastRow: number, b?: any): void;
        $updateWrapData(firstRow: number, lastRow: number): void;
        $computeWrapSplits(tokens: Token[], wrapLimit: number, tabSize: number): number[];
        $getDisplayTokens(str: string, offset: number): string[];
        $getStringScreenWidth(str: string, maxScreenColumn: number, screenColumn: number): number[];
        getRowLength(row: number): number;
        getDocumentLastRowColumnPosition(docRow: number, docColumn: number): number;
        private setFontMetrics(fm: any): any;
        getSelectionMarkers(): any;
        foldAll(startRow:number, endRow:number, depth:number);
        getFoldStringAt(row: number, column: number, trim, foldLine?: FoldLine):string|null;
        getFoldLine(docRow: number, startFoldLine?: string): string|null;
        getNextFoldLine(docRow: number, startFoldLine?: string): string|null;
        getFoldedRowCount(first: number, last: number): number;
        $addFoldLine(foldLine: FoldLine): string;
        unfold(location: number|Point|Range, expandInner?: boolean): Fold[];
        isRowFolded(docRow: number, startFoldRow: string): boolean;
        getRowFoldEnd(docRow: number, startFoldRow: string): number;
        getRowFoldStart(docRow: number, startFoldRow: string): number;
        getFoldDisplayLine(foldLine: FoldLine, endRow: number, endColumn: number, startRow: number, startColumn: number): string;
        getDisplayLine(row: number, endColumn: number, startRow: number, startColumn: number): string;
        $cloneFoldData(): FoldLine;
        toggleFold(tryToUnfold?:any): void;
        getCommentFoldRange(row: number, column: number, dir: number): Range;
        setFoldStyle(style: string): void;
        $setFolding(foldMode?: any): void;
        getParentFoldRangeData(row: number, ignoreCurrent?: any): {range: Range; firstRange: Range};
        onFoldWidgetClick(row: number, e: Event): void;
        $toggleFoldWidget(row: number, options: any): Fold|Range;
        toggleFoldWidget(toggleParent?: any): void;
        updateFoldWidgets(delta: Delta): void;
        tokenizerUpdateFoldWidgets(e: Event): void;
    }

    export class KeyBinding {
        setDefaultHandler(handler: KeyboardHandler): void;
        setKeyboardHandler(handler: KeyboardHandler): void;
        addKeyboardHandler(handler: KeyboardHandler, pos: number): void;
        removeKeyboardHandler(handler: KeyboardHandler): boolean;
        getKeyboardHandler(): KeyboardHandler;
        getStatusText(): string;
        $callKeyboardHandlers(hashId: number, keyString: string, keyCode: number, e: Event): any;
        onCommandKey(e: Event, hashId: number, keyCode: number): void;
        onTextInput(text: string): void;
    }

    export class CommandManager implements EventEmitter {
        on(name: 'exec', callback: (obj: {
            editor: Editor,
            command: Command,
            args: any[]
        }) => void): void;
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
        removeCommand(command: Command, keepCommand?: boolean): void;
        bindKey(key: string | { mac?: string, win?: string},
                command: CommandLike,
                position?: number): void;
        trimMacro(m: any): string;
    }

    export class VirtualRenderer implements OptionsProvider, EventEmitter {
        constructor(container: HTMLElement, theme?: string);
        container: HTMLElement;

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
        scrollSelectionIntoView(anchor: Point,
                                lead: Point,
                                offset?: number): void;
        scrollCursorIntoView(cursor: Point, offset?: number): void;
        getScrollTop(): number;
        getScrollLeft(): number;
        getScrollTopRow(): number;
        getScrollBottomRow(): number;
        scrollToRow(row: number): void;
        alignCursor(cursor: Point | number, alignment: number): number;
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
        textToScreenCoordinates(row: number, column: number): { pageX: number, pageY: number};
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
        setOptions(optList: {[key: string]: any}): void;
        getOptions(optionNames?: string[] | {[key: string]: any}): {[key: string]: any};
        setOption(name: string, value: any): void;
        getOption(name: string): any;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        updateCharacterSize(): void;
        onChangeNewLineMode(): void;
        onChangeTabSize(): void;
        $updateSizeAsync(): void;
        onResize(force: boolean, gutterWidth: number, width?: number, height?: number): void;
        $updateCachedSize(force: boolean, gutterWidth: number, width?: number, height?: number): number;
        onGutterResize(width: number): void;
        $updatePrintMargin(): void;
        $moveTextAreaToCursor(): void;
        setMargin(top: number, bottom: number, left: number, right: number);
        $updateScrollBarV(): void;
        $updateScrollBarH(): void;
        $renderChanges(changes: any, force: boolean): any;
        $autosize(): void;
        $computeLayerConfig(): void;
        $updateLines(): any;
        $getLongestLine(): number;
        $calcSteps(fromValue: number, toValue: number): number[];
        pixelToScreenCoordinates(x: number, y: number): {row: number, column: number, side: number, offsetX:  number};
        screenToTextCoordinates(x: number, y: number): Point;
        addToken(text: string, type: string, row: number, column: number): void;
    }


    export class Selection implements EventEmitter {
        constructor(session: EditSession);
        on(name: 'changeCursor'): void;
        on(name: 'changeSelection'): void;
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
        getAnchor(): Point;
        getCursor(): Point;
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
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        toSingleRange(range: Range): void;
        substractPoint(pos: Range): any;
        mergeOverlappingRanges(): void;
        $onAddRange(range: Range): void;
        $onRemoveRange(removed: Range[]): void;
        $initRangeList(): void;
        splitIntoLines(): void;
        toggleBlockSelection(): void;
        rectangularRangeBlock(screenCursor: Point, screenAnchor: Anchor, includeEmptyLines: boolean): Range;
        setSelectionAnchor(row: number, column: number): void;
        getSelectionAnchor(): Point;
        getSelectionLead(): Point;
        $setSelection(anchorRow: number, anchorColumn: number, cursorRow: number, cursorColumn: number): void;
        $moveSelection(mover: any): void;
        moveTo(row: number, column: number): void;
        moveToPosition(pos: Point): void;
        getLineRange(row: number, excludeLastChar: boolean): Range;
        wouldMoveIntoSoftTab(cursor: Point, tabSize: number, direction: number): boolean;
        $shortWordEndIndex(rightOfCursor: string): number;
        moveCursorShortWordRight(): Function;
        moveCursorShortWordLeft(): Function;
        detach(): void;
        toOrientedRange(range: Range): Range;
        getRangeOfMovements(func: Function): Range;
        toJSON(): Range;
        fromJSON(data: Range): void;
        isEqual(data: Range): boolean;
    }

    export class Editor implements OptionsProvider, EventEmitter {
        constructor(renderer: VirtualRenderer, session: EditSession, options?: EditorOptions);
        container: HTMLElement;
        renderer: VirtualRenderer;
        id: string;
        commands: CommandManager;
        keyBinding: KeyBinding;
        session: EditSession;
        selection: Selection;

        on(name: 'blur', callback: (e: Event) => void): void;
        on(name: 'change', callback: (delta: Delta) => void): void;
        on(name: 'changeSelectionStyle', callback: (obj: { data: string }) => void): void;
        on(name: 'changeSession',
           callback: (obj: { session: EditSession, oldSession: EditSession }) => void): void;
        on(name: 'copy', callback: (obj: { text: string }) => void): void;
        on(name: 'focus', callback: (e: Event) => void): void;
        on(name: 'paste', callback: (obj: { text: string }) => void): void;

        setOption<T extends keyof EditorOptions>(name: T, value: EditorOptions[T]): void;
        getOption<T extends keyof EditorOptions>(name: T): EditorOptions[T];

        setKeyboardHandler(keyboardHandler: string, callback?: () => void): void;
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
        setFontSize(size: string): void;
        focus(): void;
        isFocused(): boolean;
        flur(): void;
        getSelectedText(): string;
        getCopyText(): string;
        execCommand(command: string | string[], args: any): boolean;
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
        find(needle: string, options?: Partial<SearchOptions>, animate?: boolean): void;
        findNext(options?: Partial<SearchOptions>, animate?: boolean): void;
        findPrevious(options?: Partial<SearchOptions>, animate?: boolean): void;
        undo(): void;
        redo(): void;
        destroy(): void;
        setAutoScrollEditorIntoView(enable: boolean): void;
        once(name: string, callback: Function): void;
        setDefaultHandler(name: string, callback: Function): void;
        removeDefaultHandler(name: string, callback: Function): void;
        on(name: string, callback: Function, capturing?: boolean): void;
        off(name: string, callback: Function): void;
        setOptions(optList: {[key: string]: any}): void;
        getOptions(optionNames?: string[] | {[key: string]: any}): {[key: string]: any};
        setOption(name: string, value: any): void;
        getOption(name: string): any;
        $initOperationListeners(): void;
        startOperation(commandEvent: {command: string, args: any }): void;
        endOperation(e: {returnValue: boolean}): void;
        $historyTracker(e: {command: Command; args: any}): void;
        $highlightBrackets(): void;
        $highlightTags(): void;
        blur(): void;
        onFocus(e: Event): void;
        onBlur(e: Event): void;
        $cursorChange(): void;
        onDocumentChange(delta: Delta): void;
        onTokenizerUpdate(e: Event): void;
        onScrollTopChange(): void;
        onScrollLeftChange(): void;
        onCursorChange(): void;
        $updateHighlightActiveLine(): void;
        onSelectionChange(e: Event): void;
        $getSelectionHighLightRegexp(): void;
        onChangeFrontMarker(): void;
        onChangeBackMarker(): void;
        onChangeBreakpoint(): void;
        onChangeAnnotation(): void;
        onChangeMode(e: Event): void;
        onChangeWrapLimit(): void;
        onChangeWrapMode(): void;
        onChangeFold(): void;
        onCopy(): void;
        onCut(): void;
        onPaste(text: string, event: Event): void;
        $handlePaste(e: string|{text: string}): void;
        onTextInput(text: string, composition?: any): void;
        applyComposition(text: string, composition: any): void;
        onCommandKey(e: Event, hashId: any, keyCode: any): void;
        removeToLineStart(): void;
        removeToLineEnd(): void;
        getNumberAt(row: number, column: number): number;
        toggleWord(): void;
        private $moveLines(dir: any, copy?: any): void;
        $getSelectedRows(range: Range): {first: number, last: number};
        onCompositionStart(compositionState: any): void;
        onCompositionUpdate(text: string): void;
        onCompositionEnd(): void;
        $getVisibleRowCount(): number;
        $moveByPage(dir: number, select: boolean): void;
        $tryReplace(range: Range, replacement: any): Range|null;
        revealRange(range: Range, animate: boolean): void;
        $resetCursorStyle(): void;
        updateSelectionMarkers(): void;
        addSelectionMarker(orientedRange: Range): Range;
        removeSelectionMarker(range: Range): void;
        removeSelectionMarkers(range: Range): void;
        $onAddRange(e: Event): void;
        $onRemoveRange(e: Event): void;
        $onMultiSelect(e: Event): void;
        $onSingleSelect(e: Event): void;
        $onMultiSelectExec(e: Event): void;
        forEachSelection(cmd: Command, args: string, options?: any): void;
        exitMultiSelectMode(): void;
        $checkMultiselectChange(e: Event, anchor: Anchor): void;
        findAll(needle: string, options?: any, additive?: boolean): number;
        selectMoreLines(dir: number, skip: boolean): void;
        transposeSelections(dir: number): void;
        selectMore(dir: number, skip: boolean, stopAtFirst?: any): void;
        alignCursors(): void;
        $reAlignText(lines: string[], forceLeft?: any): string[];
        insertSnippet(content: any, options: any): any;
        expandSnippet(options: any): any;
    }
}

export const version: string;
export const config: Ace.Config;
export function require(name: string): any;
export function edit(el: Element | string, options?: Partial<Ace.EditorOptions>): Ace.Editor;
export function createEditSession(text: Ace.Document | string, mode: Ace.Mode): Ace.EditSession;
