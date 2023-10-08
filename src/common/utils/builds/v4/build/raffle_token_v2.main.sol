// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  address payable _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  uint256 _Some;
  }
enum _enum_T2 {None, Some}
struct T2 {
  _enum_T2 which;
  bool _None;
  bool _Some;
  }
struct T3 {
  uint256 _amountOfRaffleToken;
  address payable _asset;
  uint256 _cost;
  address payable _creator;
  uint256 _deadline;
  bool _isFeatured;
  uint256 _maxEntries;
  uint256 _numberOfTickets;
  bytes30 _projectName;
  address payable _raffleToken;
  }
struct T5 {
  uint256 _bal;
  uint256 _buyers;
  uint256 _currentUserNumber;
  bool _keepGoing;
  uint256 _percent;
  uint256 _raffleBal;
  uint256 _ticketsLeft;
  T0 _winner;
  }
struct T6 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T8 {
  address payable v2180;
  bytes30 v2181;
  address payable v2182;
  bool v2183;
  uint256 v2184;
  uint256 v2185;
  uint256 v2186;
  uint256 v2187;
  uint256 v2188;
  uint256 v2189;
  address payable v2191;
  uint256 v2192;
  address payable v2193;
  address payable v2194;
  uint256 v2227;
  T5 v2236;
  uint256 v2240;
  T6[2] v2243;
  uint256 v2244;
  bool v2284;
  uint256 v2295;
  uint256 v2296;
  uint256 v2297;
  uint256 v2298;
  T6 v2299;
  uint256 v2300;
  }
struct T9 {
  uint256 elem0;
  }
enum _enum_T10 {User_buyTicket0_310, User_claim0_310, User_determinWinnerAfterDeadline0_310, User_end0_310, User_optin0_310}
struct T10 {
  _enum_T10 which;
  T9 _User_buyTicket0_310;
  bool _User_claim0_310;
  bool _User_determinWinnerAfterDeadline0_310;
  bool _User_end0_310;
  bool _User_optin0_310;
  }
struct T11 {
  uint256 elem0;
  T10 elem1;
  }
struct T12 {
  uint256 elem0;
  bytes30 elem1;
  address payable elem2;
  bool elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  uint256 elem9;
  uint256 elem10;
  address payable elem11;
  uint256 elem12;
  address payable elem13;
  address payable elem14;
  }
struct T13 {
  address payable v2180;
  bytes30 v2181;
  address payable v2182;
  bool v2183;
  uint256 v2184;
  uint256 v2185;
  uint256 v2186;
  uint256 v2187;
  uint256 v2188;
  uint256 v2189;
  uint256 v2190;
  address payable v2191;
  uint256 v2192;
  address payable v2193;
  address payable v2194;
  T6[2] v2203;
  }
struct T14 {
  address payable elem0;
  bytes30 elem1;
  address payable elem2;
  bool elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  uint256 elem9;
  address payable elem10;
  uint256 elem11;
  address payable elem12;
  address payable elem13;
  uint256 elem14;
  T5 elem15;
  uint256 elem16;
  uint256 elem17;
  T6[2] elem18;
  uint256 elem19;
  }
struct T15 {
  address payable _address;
  uint256 _amount;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set7(T6[2] memory arr, uint256 idx, T6 memory val) internal  returns (T6[2] memory arrp) {
    for (uint256 i = 0; i < 2; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T12 _a);
  event _reach_e1(address _who, T9 _a);
  event _reach_e3(address _who, T11 _a);
  event _reach_oe_v2713(bool v0);
  event _reach_oe_v2739(bool v0);
  event _reach_oe_v3154(bool v0);
  event _reach_oe_v3534(address payable v0);
  event _reach_oe_v3907(bool v0);
  event _reach_oe_v4282(bool v0);
  event bought(T15 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (uint256 => T0) _reachm_0;
  function __reachm_0Ref(uint256 addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(uint256 addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (uint256 => T0) _reachm_2;
  function __reachm_2Ref(uint256 addr) internal view returns (T0 memory res) {
    if (_reachm_2[addr].which == _enum_T0.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(uint256 addr) external view returns (T0 memory res) {
    res = __reachm_2Ref(addr);
    }
  mapping (address => T2) _reachm_3;
  function __reachm_3Ref(address addr) internal view returns (T2 memory res) {
    if (_reachm_3[addr].which == _enum_T2.Some) {
      res = _reachm_3[addr];
      }
    else {
      res.which = _enum_T2.None;
      res._None = false;
      }
    }
  function _reachm_3Ref(address addr) external view returns (T2 memory res) {
    res = __reachm_3Ref(addr);
    }
  struct Memory {
    bool nil;
    uint256 _reachr_Info_balance;
    uint256 _reachr_Info_currentSec;
    uint256 _reachr_Info_currentTime;
    bool _reachr_Info_hasDeadlineReached;
    uint256 _reachr_Info_myTicketsAmount;
    bool _reachr_Info_opted;
    T3 _reachr_Info_props;
    uint256 _reachr_Info_ticketsBought;
    uint256 _reachr_Info_ticketsLeft;
    address payable _reachr_Info_token;
    T0 _reachr_Info_winner;
    bool _reachr_User_buyTicket;
    bool _reachr_User_claim;
    address payable _reachr_User_determinWinnerAfterDeadline;
    bool _reachr_User_end;
    bool _reachr_User_optin;
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(7) /*'(./raffle_token_v2.rsh:46:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_balance = _svs.v2300;
    }
  function _reacha_Info_currentSec(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(8) /*'(./raffle_token_v2.rsh:43:15:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_currentSec = _svs.v2227;
    }
  function _reacha_Info_currentTime(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(9) /*'(./raffle_token_v2.rsh:42:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_currentTime = _svs.v2240;
    }
  function _reacha_Info_hasDeadlineReached(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(10) /*'(./raffle_token_v2.rsh:44:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_hasDeadlineReached = _svs.v2284;
    }
  function _reacha_Info_myTicketsAmount(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(11) /*'(./raffle_token_v2.rsh:45:20:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_myTicketsAmount = (((__reachm_1Ref((_a))).which == _enum_T1.Some ? (__reachm_1Ref((_a)))._Some : uint256(0)));
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(12) /*'(./raffle_token_v2.rsh:41:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_opted = ((uint256((__reachm_3Ref((_a))).which)) == uint256(1));
    }
  struct _F7083 {
    T3 v2225;
    }
  function _reacha_Info_props(bool _a, Memory memory _Memory) internal view {
    _F7083 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(13) /*'(./raffle_token_v2.rsh:48:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _f.v2225._amountOfRaffleToken = _svs.v2192;
    _f.v2225._asset = _svs.v2182;
    _f.v2225._cost = _svs.v2188;
    _f.v2225._creator = _svs.v2193;
    _f.v2225._deadline = _svs.v2185;
    _f.v2225._isFeatured = _svs.v2183;
    _f.v2225._maxEntries = _svs.v2189;
    _f.v2225._numberOfTickets = _svs.v2184;
    _f.v2225._projectName = _svs.v2181;
    _f.v2225._raffleToken = _svs.v2191;
    _Memory._reachr_Info_props = _f.v2225;
    }
  function _reacha_Info_ticketsBought(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(14) /*'(./raffle_token_v2.rsh:39:18:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_ticketsBought = (_svs.v2236._currentUserNumber);
    }
  function _reacha_Info_ticketsLeft(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(15) /*'(./raffle_token_v2.rsh:38:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_ticketsLeft = (_svs.v2236._ticketsLeft);
    }
  function _reacha_Info_token(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(16) /*'(./raffle_token_v2.rsh:47:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_token = _svs.v2191;
    }
  function _reacha_Info_winner(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(17) /*'(./raffle_token_v2.rsh:40:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_winner = (_svs.v2236._winner);
    }
  struct _F7088 {
    T9 v7048;
    T10 v7049;
    }
  function _reacha_User_buyTicket(uint256 _a, Memory memory _Memory) internal  {
    _F7088 memory _f;
    _f.v7048.elem0 = _a;
    _f.v7049.which = _enum_T10.User_buyTicket0_310;
    _f.v7049._User_buyTicket0_310 = _f.v7048;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7049;
    _reachi_3(_ja, _Memory);
    }
  struct _F7089 {
    bool v7053;
    T10 v7054;
    }
  function _reacha_User_claim(bool _a, Memory memory _Memory) internal  {
    _F7089 memory _f;
    _f.v7054.which = _enum_T10.User_claim0_310;
    _f.v7054._User_claim0_310 = _f.v7053;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7054;
    _reachi_3(_ja, _Memory);
    }
  struct _F7090 {
    bool v7057;
    T10 v7058;
    }
  function _reacha_User_determinWinnerAfterDeadline(bool _a, Memory memory _Memory) internal  {
    _F7090 memory _f;
    _f.v7058.which = _enum_T10.User_determinWinnerAfterDeadline0_310;
    _f.v7058._User_determinWinnerAfterDeadline0_310 = _f.v7057;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7058;
    _reachi_3(_ja, _Memory);
    }
  struct _F7091 {
    bool v7061;
    T10 v7062;
    }
  function _reacha_User_end(bool _a, Memory memory _Memory) internal  {
    _F7091 memory _f;
    _f.v7062.which = _enum_T10.User_end0_310;
    _f.v7062._User_end0_310 = _f.v7061;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7062;
    _reachi_3(_ja, _Memory);
    }
  struct _F7092 {
    bool v7065;
    T10 v7066;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F7092 memory _f;
    _f.v7066.which = _enum_T10.User_optin0_310;
    _f.v7066._User_optin0_310 = _f.v7065;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7066;
    _reachi_3(_ja, _Memory);
    }
  struct _F7093 {
    T6 v2151;
    T6[2] v2152;
    T6[2] v2199;
    }
  function _reachi_0(T12 memory _a, Memory memory _Memory) internal  {
    _F7093 memory _f;
    reachRequire((! locked), uint256(18) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(19) /*'time check at ./raffle_token_v2.rsh:78:12:dot'*/);
    _f.v2151.elem0 = uint256(0);
    _f.v2151.elem1 = uint256(0);
    _f.v2151.elem2 = false;
    _f.v2152[0] = _f.v2151;
    _f.v2152[1] = _f.v2151;
    _f.v2199 = array_set7(_f.v2152, uint256(0), (T6({elem0: uint256(0), elem1: (_f.v2152[uint256(0)]).elem1, elem2: (_f.v2152[uint256(0)]).elem2})));
    reachRequire(((((_a.elem11) == (_a.elem2)) ? false : true)), uint256(20) /*'(./raffle_token_v2.rsh:78:12:dot,[],Just "non-network tokens distinct")'*/);
    reachRequire((((_a.elem6) <= (_a.elem4))), uint256(21) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:94:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cannot be more that tickets")'*/);
    reachRequire((((_a.elem8) < uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(22) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too large")'*/);
    reachRequire((((_a.elem8) >= uint256(1))), uint256(23) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:96:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too small")'*/);
    
    
    reachRequire((msg.value == uint256(0)), uint256(24) /*'(./raffle_token_v2.rsh:78:12:dot,[],"verify network token pay amount")'*/);
    T13 memory nsvs;
    nsvs.v2180 = payable(msg.sender);
    nsvs.v2181 = (_a.elem1);
    nsvs.v2182 = (_a.elem2);
    nsvs.v2183 = (_a.elem3);
    nsvs.v2184 = (_a.elem4);
    nsvs.v2185 = (_a.elem5);
    nsvs.v2186 = (_a.elem6);
    nsvs.v2187 = (_a.elem7);
    nsvs.v2188 = (_a.elem8);
    nsvs.v2189 = (_a.elem9);
    nsvs.v2190 = (_a.elem10);
    nsvs.v2191 = (_a.elem11);
    nsvs.v2192 = (_a.elem12);
    nsvs.v2193 = (_a.elem13);
    nsvs.v2194 = (_a.elem14);
    nsvs.v2203 = (array_set7(_f.v2199, uint256(1), (T6({elem0: uint256(0), elem1: (_f.v2199[uint256(1)]).elem1, elem2: (_f.v2199[uint256(1)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F7094 {
    T6[2] v2223;
    T0 v2234;
    T5 v2235;
    }
  function _reachi_1(T9 memory _a, Memory memory _Memory) internal  {
    _F7094 memory _f;
    reachRequire((current_step == uint256(1)), uint256(25) /*'state check at ./raffle_token_v2.rsh:100:12:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(26) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(27) /*'time check at ./raffle_token_v2.rsh:100:12:dot'*/);
    reachRequire((msg.value == _svs.v2190), uint256(28) /*'(./raffle_token_v2.rsh:100:12:dot,[],"verify network token pay amount")'*/);
    _f.v2223 = array_set7(_svs.v2203, uint256(1), (T6({elem0: (unsafeAdd(((_svs.v2203[uint256(1)]).elem0), _svs.v2192)), elem1: (_svs.v2203[uint256(1)]).elem1, elem2: (_svs.v2203[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2191, _svs.v2192)), uint256(29) /*'(./raffle_token_v2.rsh:100:12:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v2180 == payable(msg.sender))), uint256(30) /*'(./raffle_token_v2.rsh:100:12:dot,[],Just "sender correct")'*/);
    _f.v2234.which = _enum_T0.None;
    _f.v2234._None = false;
    _f.v2235._bal = ((_f.v2223[uint256(0)]).elem0);
    _f.v2235._buyers = uint256(0);
    _f.v2235._currentUserNumber = uint256(0);
    _f.v2235._keepGoing = true;
    _f.v2235._percent = uint256(5);
    _f.v2235._raffleBal = ((_f.v2223[uint256(1)]).elem0);
    _f.v2235._ticketsLeft = _svs.v2184;
    _f.v2235._winner = _f.v2234;
    T14  memory _ja;
    _ja.elem0 = _svs.v2180;
    _ja.elem1 = _svs.v2181;
    _ja.elem2 = _svs.v2182;
    _ja.elem3 = _svs.v2183;
    _ja.elem4 = _svs.v2184;
    _ja.elem5 = _svs.v2185;
    _ja.elem6 = _svs.v2186;
    _ja.elem7 = _svs.v2187;
    _ja.elem8 = _svs.v2188;
    _ja.elem9 = _svs.v2189;
    _ja.elem10 = _svs.v2191;
    _ja.elem11 = _svs.v2192;
    _ja.elem12 = _svs.v2193;
    _ja.elem13 = _svs.v2194;
    _ja.elem14 = (safeAdd(uint256(block.timestamp), _svs.v2185));
    _ja.elem15 = _f.v2235;
    _ja.elem16 = uint256(block.number);
    _ja.elem17 = uint256(block.timestamp);
    _ja.elem18 = _f.v2223;
    _ja.elem19 = _svs.v2190;
    _reachl_2(_ja, _Memory);
    }
  struct _F7095 {
    T9 v2553;
    uint256 v2560;
    uint256 v2565;
    uint256 v2571;
    T6[2] v2678;
    T15 v2703;
    uint256 v2705;
    bool v2707;
    bool v2710;
    T0 v2736;
    T5 v2737;
    T5 v2762;
    address payable v2941;
    T6[2] v3137;
    uint256 v3144;
    T6[2] v3153;
    T5 v3170;
    T0 v3529;
    address payable v3534;
    T0 v3548;
    T5 v3549;
    T5 v3932;
    }
  function _reachi_3(T11 memory _a, Memory memory _Memory) internal  {
    _F7095 memory _f;
    reachRequire((current_step == uint256(4)), uint256(31) /*'state check at ./raffle_token_v2.rsh:134:37:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(32) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(33) /*'time check at ./raffle_token_v2.rsh:134:37:dot'*/);
    if ((_a.elem1).which == _enum_T10.User_buyTicket0_310) {
    _f.v2553 = (_a.elem1)._User_buyTicket0_310;
    _f.v2560 = ((__reachm_1Ref(payable(msg.sender))).which == _enum_T1.Some ? (__reachm_1Ref(payable(msg.sender)))._Some : uint256(0));
    reachRequire(((_svs.v2240 < _svs.v2227)), uint256(34) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Deadline reached cannot enter")'*/);
    reachRequire((((_f.v2553.elem0) >= uint256(1))), uint256(35) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Cannot purchase less than 1")'*/);
    _f.v2565 = safeAdd(_f.v2560, (_f.v2553.elem0));
    reachRequire(((_svs.v2189 >= _f.v2565)), uint256(36) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Limit reached")'*/);
    reachRequire((((safeAdd((_f.v2553.elem0), _f.v2560)) <= _svs.v2184)), uint256(37) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:166:50:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:166:50:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Cannot buy more tickets than balance")'*/);
    _f.v2571 = safeMul((_f.v2553.elem0), _svs.v2188);
    reachRequire((msg.value == uint256(0)), uint256(38) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify network token pay amount")'*/);
    _f.v2678 = array_set7(_svs.v2243, uint256(0), (T6({elem0: (unsafeAdd(_svs.v2300, _f.v2571)), elem1: _svs.v2299.elem1, elem2: _svs.v2299.elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2182, _f.v2571)), uint256(39) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2191, uint256(0))), uint256(40) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    _reachm_1[payable(msg.sender)].which = _enum_T1.Some;
    _reachm_1[payable(msg.sender)]._Some = _f.v2565;
    
    _f.v2703._address = payable(msg.sender);
    _f.v2703._amount = (_f.v2553.elem0);
    emit bought( _f.v2703);
    _reachm_0[(_svs.v2236._buyers)].which = _enum_T0.Some;
    _reachm_0[(_svs.v2236._buyers)]._Some = payable(msg.sender);
    
    _f.v2705 = safeAdd(_svs.v2295, uint256(1));
    if ((_f.v2705 == _svs.v2186)) {
      _f.v2707 = true;
      }
    else {
      if ((_f.v2705 <= _svs.v2186)) {
        _f.v2710 = ((safeAdd(_svs.v2295, (_f.v2553.elem0))) >= _svs.v2186);
        }
      else {
        _f.v2710 = false;
        }
      _f.v2707 = _f.v2710;
      }
    if (_f.v2707) {
      emit _reach_oe_v2713( (true));
      _Memory._reachr_User_buyTicket = (true);
      _f.v2736.which = _enum_T0.Some;
      _f.v2736._Some = payable(msg.sender);
      _f.v2737._bal = (safeAdd(_svs.v2296, _f.v2571));
      _f.v2737._buyers = (safeAdd((_svs.v2236._buyers), uint256(1)));
      _f.v2737._currentUserNumber = (safeAdd(_svs.v2295, (_f.v2553.elem0)));
      _f.v2737._keepGoing = (_svs.v2236._keepGoing);
      _f.v2737._percent = (_svs.v2236._percent);
      _f.v2737._raffleBal = _svs.v2298;
      _f.v2737._ticketsLeft = (safeSub(_svs.v2297, (_f.v2553.elem0)));
      _f.v2737._winner = _f.v2736;
      T14  memory _ja;
      _ja.elem0 = _svs.v2180;
      _ja.elem1 = _svs.v2181;
      _ja.elem2 = _svs.v2182;
      _ja.elem3 = _svs.v2183;
      _ja.elem4 = _svs.v2184;
      _ja.elem5 = _svs.v2185;
      _ja.elem6 = _svs.v2186;
      _ja.elem7 = _svs.v2187;
      _ja.elem8 = _svs.v2188;
      _ja.elem9 = _svs.v2189;
      _ja.elem10 = _svs.v2191;
      _ja.elem11 = _svs.v2192;
      _ja.elem12 = _svs.v2193;
      _ja.elem13 = _svs.v2194;
      _ja.elem14 = _svs.v2227;
      _ja.elem15 = _f.v2737;
      _ja.elem16 = uint256(block.number);
      _ja.elem17 = uint256(block.timestamp);
      _ja.elem18 = _f.v2678;
      _ja.elem19 = _svs.v2244;
      _reachl_2(_ja, _Memory);
      }
    else {
      emit _reach_oe_v2739( (true));
      _Memory._reachr_User_buyTicket = (true);
      _f.v2762._bal = (safeAdd(_svs.v2296, _f.v2571));
      _f.v2762._buyers = (safeAdd((_svs.v2236._buyers), uint256(1)));
      _f.v2762._currentUserNumber = (safeAdd(_svs.v2295, (_f.v2553.elem0)));
      _f.v2762._keepGoing = (_svs.v2236._keepGoing);
      _f.v2762._percent = (_svs.v2236._percent);
      _f.v2762._raffleBal = _svs.v2298;
      _f.v2762._ticketsLeft = (safeSub(_svs.v2297, (_f.v2553.elem0)));
      _f.v2762._winner = (_svs.v2236._winner);
      T14  memory _ja;
      _ja.elem0 = _svs.v2180;
      _ja.elem1 = _svs.v2181;
      _ja.elem2 = _svs.v2182;
      _ja.elem3 = _svs.v2183;
      _ja.elem4 = _svs.v2184;
      _ja.elem5 = _svs.v2185;
      _ja.elem6 = _svs.v2186;
      _ja.elem7 = _svs.v2187;
      _ja.elem8 = _svs.v2188;
      _ja.elem9 = _svs.v2189;
      _ja.elem10 = _svs.v2191;
      _ja.elem11 = _svs.v2192;
      _ja.elem12 = _svs.v2193;
      _ja.elem13 = _svs.v2194;
      _ja.elem14 = _svs.v2227;
      _ja.elem15 = _f.v2762;
      _ja.elem16 = uint256(block.number);
      _ja.elem17 = uint256(block.timestamp);
      _ja.elem18 = _f.v2678;
      _ja.elem19 = _svs.v2244;
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T10.User_claim0_310) {
    reachRequire((((uint256((_svs.v2236._winner).which)) == uint256(1))), uint256(41) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Winner has not been determined")'*/);
    reachRequire((_svs.v2284), uint256(42) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Cannot claim yet")'*/);
    reachRequire(((_svs.v2298 <= ((_svs.v2243[uint256(1)]).elem0))), uint256(43) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Error transferring")'*/);
    _f.v2941 = ((_svs.v2236._winner).which == _enum_T0.Some ? (_svs.v2236._winner)._Some : _svs.v2180);
    reachRequire(((_f.v2941 == payable(msg.sender))), uint256(44) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:255:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:244:26:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:244:26:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Not winner")'*/);
    reachRequire((msg.value == uint256(0)), uint256(45) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2182, uint256(0))), uint256(46) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2191, uint256(0))), uint256(47) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v2227)), uint256(48) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:258:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:258:13:function exp)],Just "Cannot claim yet")'*/);
    _f.v3137 = array_set7(_svs.v2243, uint256(1), (T6({elem0: (unsafeSub(((_svs.v2243[uint256(1)]).elem0), ((_svs.v2243[uint256(1)]).elem0))), elem1: (_svs.v2243[uint256(1)]).elem1, elem2: (_svs.v2243[uint256(1)]).elem2})));
    safeTokenTransfer(_svs.v2191, _f.v2941, ((_svs.v2243[uint256(1)]).elem0));
    _f.v3144 = safeSub(((_f.v3137[uint256(0)]).elem0), (safeDiv((safeMul(((_f.v3137[uint256(0)]).elem0), uint256(5))), uint256(100))));
    _f.v3153 = array_set7(_f.v3137, uint256(0), (T6({elem0: (unsafeSub(((_f.v3137[uint256(0)]).elem0), _f.v3144)), elem1: (_f.v3137[uint256(0)]).elem1, elem2: (_f.v3137[uint256(0)]).elem2})));
    safeTokenTransfer(_svs.v2182, _svs.v2180, _f.v3144);
    emit _reach_oe_v3154( (true));
    _Memory._reachr_User_claim = (true);
    _f.v3170._bal = ((_f.v3153[uint256(0)]).elem0);
    _f.v3170._buyers = (_svs.v2236._buyers);
    _f.v3170._currentUserNumber = _svs.v2295;
    _f.v3170._keepGoing = false;
    _f.v3170._percent = (_svs.v2236._percent);
    _f.v3170._raffleBal = uint256(0);
    _f.v3170._ticketsLeft = _svs.v2297;
    _f.v3170._winner = (_svs.v2236._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v2180;
    _ja.elem1 = _svs.v2181;
    _ja.elem2 = _svs.v2182;
    _ja.elem3 = _svs.v2183;
    _ja.elem4 = _svs.v2184;
    _ja.elem5 = _svs.v2185;
    _ja.elem6 = _svs.v2186;
    _ja.elem7 = _svs.v2187;
    _ja.elem8 = _svs.v2188;
    _ja.elem9 = _svs.v2189;
    _ja.elem10 = _svs.v2191;
    _ja.elem11 = _svs.v2192;
    _ja.elem12 = _svs.v2193;
    _ja.elem13 = _svs.v2194;
    _ja.elem14 = _svs.v2227;
    _ja.elem15 = _f.v3170;
    _ja.elem16 = uint256(block.number);
    _ja.elem17 = uint256(block.timestamp);
    _ja.elem18 = _f.v3153;
    _ja.elem19 = _svs.v2244;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_determinWinnerAfterDeadline0_310) {
    reachRequire((((uint256((_svs.v2236._winner).which)) == uint256(0))), uint256(49) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Winner has not been determined")'*/);
    reachRequire((_svs.v2284), uint256(50) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:278:48:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:278:48:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    reachRequire((msg.value == uint256(0)), uint256(51) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2182, uint256(0))), uint256(52) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2191, uint256(0))), uint256(53) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v2227)), uint256(54) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    _f.v3529 = __reachm_0Ref((safeMod(_svs.v2187, (_svs.v2236._buyers))));
    reachRequire((((uint256(_f.v3529.which)) == uint256(1))), uint256(55) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:291:16:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:289:13:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:289:13:function exp)],Just "Error as the buyer for the winner index does not exist")'*/);
    _f.v3534 = (_f.v3529.which == _enum_T0.Some ? _f.v3529._Some : _svs.v2194);
    emit _reach_oe_v3534( _f.v3534);
    _Memory._reachr_User_determinWinnerAfterDeadline = _f.v3534;
    _f.v3548.which = _enum_T0.Some;
    _f.v3548._Some = _f.v3534;
    _f.v3549._bal = _svs.v2296;
    _f.v3549._buyers = (_svs.v2236._buyers);
    _f.v3549._currentUserNumber = _svs.v2295;
    _f.v3549._keepGoing = (_svs.v2236._keepGoing);
    _f.v3549._percent = (_svs.v2236._percent);
    _f.v3549._raffleBal = _svs.v2298;
    _f.v3549._ticketsLeft = _svs.v2297;
    _f.v3549._winner = _f.v3548;
    T14  memory _ja;
    _ja.elem0 = _svs.v2180;
    _ja.elem1 = _svs.v2181;
    _ja.elem2 = _svs.v2182;
    _ja.elem3 = _svs.v2183;
    _ja.elem4 = _svs.v2184;
    _ja.elem5 = _svs.v2185;
    _ja.elem6 = _svs.v2186;
    _ja.elem7 = _svs.v2187;
    _ja.elem8 = _svs.v2188;
    _ja.elem9 = _svs.v2189;
    _ja.elem10 = _svs.v2191;
    _ja.elem11 = _svs.v2192;
    _ja.elem12 = _svs.v2193;
    _ja.elem13 = _svs.v2194;
    _ja.elem14 = _svs.v2227;
    _ja.elem15 = _f.v3549;
    _ja.elem16 = uint256(block.number);
    _ja.elem17 = uint256(block.timestamp);
    _ja.elem18 = _svs.v2243;
    _ja.elem19 = _svs.v2244;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_end0_310) {
    reachRequire((((payable(msg.sender) == _svs.v2180) ? true : (payable(msg.sender) == _svs.v2194))), uint256(56) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Don't have administrative rights to perform action")'*/);
    reachRequire(((_svs.v2297 == _svs.v2184)), uint256(57) /*'(reach standard library:57:5:application,[at ./raffle_token_v2.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v2.rsh:305:24:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:305:24:function exp),at ./raffle_token_v2.rsh:134:37:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:134:37:function exp),at ./raffle_token_v2.rsh:149:14:application call to [unknown function] (defined at: ./raffle_token_v2.rsh:149:14:function exp)],Just "Cannot end contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(58) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2182, uint256(0))), uint256(59) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2191, uint256(0))), uint256(60) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v3907( (true));
    _Memory._reachr_User_end = (true);
    safeTokenTransfer(_svs.v2191, payable(msg.sender), ((_svs.v2243[uint256(1)]).elem0));
    _f.v3932._bal = _svs.v2296;
    _f.v3932._buyers = (_svs.v2236._buyers);
    _f.v3932._currentUserNumber = _svs.v2295;
    _f.v3932._keepGoing = false;
    _f.v3932._percent = (_svs.v2236._percent);
    _f.v3932._raffleBal = _svs.v2298;
    _f.v3932._ticketsLeft = _svs.v2297;
    _f.v3932._winner = (_svs.v2236._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v2180;
    _ja.elem1 = _svs.v2181;
    _ja.elem2 = _svs.v2182;
    _ja.elem3 = _svs.v2183;
    _ja.elem4 = _svs.v2184;
    _ja.elem5 = _svs.v2185;
    _ja.elem6 = _svs.v2186;
    _ja.elem7 = _svs.v2187;
    _ja.elem8 = _svs.v2188;
    _ja.elem9 = _svs.v2189;
    _ja.elem10 = _svs.v2191;
    _ja.elem11 = _svs.v2192;
    _ja.elem12 = _svs.v2193;
    _ja.elem13 = _svs.v2194;
    _ja.elem14 = _svs.v2227;
    _ja.elem15 = _f.v3932;
    _ja.elem16 = uint256(block.number);
    _ja.elem17 = uint256(block.timestamp);
    _ja.elem18 = (array_set7(_svs.v2243, uint256(1), (T6({elem0: (unsafeSub(((_svs.v2243[uint256(1)]).elem0), ((_svs.v2243[uint256(1)]).elem0))), elem1: (_svs.v2243[uint256(1)]).elem1, elem2: (_svs.v2243[uint256(1)]).elem2}))));
    _ja.elem19 = _svs.v2244;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_optin0_310) {
    reachRequire((msg.value == uint256(0)), uint256(61) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2182, uint256(0))), uint256(62) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2191, uint256(0))), uint256(63) /*'(./raffle_token_v2.rsh:134:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4282( (false));
    _Memory._reachr_User_optin = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v2180;
    _ja.elem1 = _svs.v2181;
    _ja.elem2 = _svs.v2182;
    _ja.elem3 = _svs.v2183;
    _ja.elem4 = _svs.v2184;
    _ja.elem5 = _svs.v2185;
    _ja.elem6 = _svs.v2186;
    _ja.elem7 = _svs.v2187;
    _ja.elem8 = _svs.v2188;
    _ja.elem9 = _svs.v2189;
    _ja.elem10 = _svs.v2191;
    _ja.elem11 = _svs.v2192;
    _ja.elem12 = _svs.v2193;
    _ja.elem13 = _svs.v2194;
    _ja.elem14 = _svs.v2227;
    _ja.elem15 = _svs.v2236;
    _ja.elem16 = uint256(block.number);
    _ja.elem17 = uint256(block.timestamp);
    _ja.elem18 = _svs.v2243;
    _ja.elem19 = _svs.v2244;
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T14 memory _a, Memory memory _Memory) internal  {
    if ((_a.elem15._keepGoing)) {
      T8 memory nsvs;
      nsvs.v2180 = _a.elem0;
      nsvs.v2181 = _a.elem1;
      nsvs.v2182 = _a.elem2;
      nsvs.v2183 = _a.elem3;
      nsvs.v2184 = _a.elem4;
      nsvs.v2185 = _a.elem5;
      nsvs.v2186 = _a.elem6;
      nsvs.v2187 = _a.elem7;
      nsvs.v2188 = _a.elem8;
      nsvs.v2189 = _a.elem9;
      nsvs.v2191 = _a.elem10;
      nsvs.v2192 = _a.elem11;
      nsvs.v2193 = _a.elem12;
      nsvs.v2194 = _a.elem13;
      nsvs.v2227 = _a.elem14;
      nsvs.v2236 = _a.elem15;
      nsvs.v2240 = _a.elem17;
      nsvs.v2243 = _a.elem18;
      nsvs.v2244 = _a.elem19;
      nsvs.v2284 = (_a.elem17 >= _a.elem14);
      nsvs.v2295 = (_a.elem15._currentUserNumber);
      nsvs.v2296 = (_a.elem15._bal);
      nsvs.v2297 = (_a.elem15._ticketsLeft);
      nsvs.v2298 = (_a.elem15._raffleBal);
      nsvs.v2299 = (_a.elem18[uint256(0)]);
      nsvs.v2300 = ((_a.elem18[uint256(0)]).elem0);
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem13.transfer(_a.elem19);
      safeTokenTransfer(_a.elem2, _a.elem13, ((_a.elem18[uint256(0)]).elem0));
      safeTokenTransfer(_a.elem10, _a.elem13, (((array_set7(_a.elem18, uint256(0), (T6({elem0: (unsafeSub(((_a.elem18[uint256(0)]).elem0), ((_a.elem18[uint256(0)]).elem0))), elem1: (_a.elem18[uint256(0)]).elem1, elem2: (_a.elem18[uint256(0)]).elem2}))))[uint256(1)]).elem0));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_currentSec() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentSec(_ja, _Memory);
    return _Memory._reachr_Info_currentSec;
    }
  function Info_currentTime() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentTime(_ja, _Memory);
    return _Memory._reachr_Info_currentTime;
    }
  function Info_hasDeadlineReached() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_hasDeadlineReached(_ja, _Memory);
    return _Memory._reachr_Info_hasDeadlineReached;
    }
  function Info_myTicketsAmount(address payable v7031) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_myTicketsAmount(v7031, _Memory);
    return _Memory._reachr_Info_myTicketsAmount;
    }
  function Info_opted(address payable v7035) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v7035, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_props() external view returns (T3 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_props(_ja, _Memory);
    return _Memory._reachr_Info_props;
    }
  function Info_ticketsBought() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_ticketsBought(_ja, _Memory);
    return _Memory._reachr_Info_ticketsBought;
    }
  function Info_ticketsLeft() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_ticketsLeft(_ja, _Memory);
    return _Memory._reachr_Info_ticketsLeft;
    }
  function Info_token() external view returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_token(_ja, _Memory);
    return _Memory._reachr_Info_token;
    }
  function Info_winner() external view returns (T0 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_winner(_ja, _Memory);
    return _Memory._reachr_Info_winner;
    }
  function User_buyTicket(uint256 v7051) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_buyTicket(v7051, _Memory);
    return _Memory._reachr_User_buyTicket;
    }
  function User_claim() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_claim(_ja, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_determinWinnerAfterDeadline() external payable returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_determinWinnerAfterDeadline(_ja, _Memory);
    return _Memory._reachr_User_determinWinnerAfterDeadline;
    }
  function User_end() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_end(_ja, _Memory);
    return _Memory._reachr_User_end;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  constructor(T12 memory v7070) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v7070, _Memory);
    }
  function _reachp_1(T9 calldata v7073) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v7073, _Memory);
    }
  function _reachp_3(T11 calldata v7076) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v7076, _Memory);
    }
  }
